const exec = require('child_process').exec;
const fs = require('fs');
const hex = require('ascii-hex');

let nameRootToken   = process.argv[2]||+Date.now();

let symbolRootToken = process.argv[3]||Date.now()+'symbol';

console.log("Name root Token: " + nameRootToken);
console.log("Symbol root Token: " + symbolRootToken);

const SERVERS = 'net.ton.dev'; //['gql.custler.net'], //frhb52973ds.ikexpress.com  http://localhost'

const dotenv = require('dotenv').config();

const giverGiverAdress  = process.env.GIVER_ADRESS;
const giverSecretKey    = process.env.GIVER_SECREAT_KEY;
const giverPublicKey    = process.env.GIVER_PUBLIC_KEY;

let rawAddress = '';
let contractKeysPublic;
let contractKeysSecret;

const TVM_WALLET_CODE = 'te6ccgECtAEAIDAAAij/ACDBAfSkIFiS9KDgXwKKIO1T2RIBAQr0pCD0oQICA87ABwMBDdEGulkOCWQEAUKOgCBZAVUB4XESuvLgQwHAAPLgQgHVInBVEQFVEQFVA9kFAfpfA/pAINdLIcEsjmhfA/pAINdLgQCAIgG5jjrtQATTfyDXS4EAgCIBuZxfA9N/0QXtUDExMQEgWQFVAeFxErry4EMBwADy4EIB1SJwVREBVREBVQPZIFkBVQHhcRK68uBDAcAA8uBCAdUicFURAVURAVUD2SBZAVUB4XESugYALPLgQwHAAPLgQgHVInBVEQFVEQFVA9kCASALCAIBIAkJAZ0INdLjkPtQAPTfyDXS4EAgCIBuY4UXwPTf9EE7VAxMVUCMFUCMFUCMAEgWQFVAeFxErry4EMBwADy4EIB1SJwVREBVREBVQPZgQOnIwG8gCgCqjkkiwSyOIzAD+kAg10uBAIAiAbkn4XG68uBDwADy4ELVJXBVEQFVEQHZIFkBVQHhcRO68uBDAsAA8uBCAtUjcFURAVUBVRMBVQTZ4QP6QCRwcFUB2QHZUg10uBAgciAbwhwgKOW+1AA9P/INdLIcEsji9fA/pAINdLwADy0EMw1NEF7VBVATBVATBVBjBVBjBVBjBVBjBVBjBVBjBVBjBVASBZAVUB4XESuvLgQwHAAPLgQgHVInBVEQFVEQFVA9lRIbCAwBOo6A4TAD1NTTB9P/J3BfUFUbVRYBVSVVSFUbVQ3ZDQFagQEHJAG8jiJb0/8g10uBAQAiAbkr4XG68uBDwADy4ELVKXBVEQFVEQHZURKwDgE6joDhBdTU0wcocF8wVRpVGgFVFgFVB1U4VRpVDNkPAVQkwgeOIlvTByDXS4EBACIBuSjhcbry4EPAAPLgQtUmcFURAVURAdlRE7AQATiOgOEG1NQocF8gVRlVGQFVBVUKVQtVKVUZVQvZEQD8jh3UINdLIcEIJuFxuvLgQ8AA8uBC1SRwVREBVREB2Y5WjhgwB9Qg10sgwADy0ENxugHAALAp4dUxKNmOJ3EXugfAAFAHsCVwcFUFVQFVBlUCVRVVF1UX4QjVMSgBVWFVCFUI2SfBApcnwAIiVQHi4SfAAPLQQ9kkAeEH1CjZAgEgXBMCAv1aFAIBIFsVAQU0wCAWATCOgALAAJlwcCMBVRFVAtnggQIA1xhxI9kXAQYh0wAYASqOgALAAJlwcCNVEQFVEdng0/9xI9kZASxt7UAGwwAD0z/TH9MflQHtUNswIsEVGgIMjoDhIsERNRsCDI6A4SLBDDAcAdaOgOECwAvyqQbyqATy4ERfAwX5AUBg+RDAAPJo7UTQ0wAwwADyfvgAcPhkMALwAchwIQHPCwBRIsxwIwHPCgfJAczJUDPOEszJcBLPCz8WzBTMEssHcM8Lf8v/y//Mye1UgAtVAjBVAjAB2R0BBiLBEB4CcI6A4QLADPKpBvKoBPLgRDAH+QFUEIT5EMAA8mjtRNDTAAHAAPK/0z/U1NMH03/T/9P/1fpA1dMAJh8BJI6AAsAAlnAicFUg2eD6QHEj2SABCgHU1dMAIQE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNkiAc5WE1YavoAUYcMAsALSBzAC8nz4I4ED6KiCCBt3QKBWGQG5cCGAG2FVAeMEAfK8cPhkCMAAgBVh8AID8uBuVheAEWG68uBkVhEhufLQZSHTASHBA5gwwAPy0GPyNOEBwALytNMAAcAAIwEgjoAgWQFVAeAB+gQxIVUB2SQB/jDSB9P/MMAA8tBl+ADIdiEBzwsDcCIBzwsBydABzoAPEs8LHyMBy39WGQHL/3DPC/9QRM4DyYATYVUCoQXAAFA0+gKAGWEB9ABw+gJw+gJxzwthEszJc/sAyHAhAc8LAFG7yz+AFGEBzIATYQHMgBJhAcsHFMt/VQ8By/9R484lALxRmsyAEWFVDsv/jiwwUFvKB8lQBMzJUAjMyVAIzMntVIAMMTExMTExMTExMTFVATBVAjBVAjAB2SQh4HEWzwsAGM4Wy38jcHBVAlUpVQxVCFUKVQlVF1UbAVUMVQzZAWAH8qgF8uBEWwf5AVQQhPkQwADyaO1E0NMAAcAA8r/TP9TU0wfTf9P/0//V+kDV0wAnASSOgALAAJZwInBVINng+kBxI9koAQoB1NXTACkBNI6AAsAAnHBwI3BVAQFVElUD2eD6QNN/cSTZKgFeVhNWGr6AFGHDALAC0gcwAvJ8+COBA+iogggbd0CgVhkBuSDyvHD4ZFYU10shwSwrAViOgCBZAVUB4XESuvLgQwHAAPLgQoAVYdUicFUBgBR1Y4AXYXKAFmMBgBhh2SwBpnBVA4AdYVUB4wSAF2H6QNEMwADy4G5WGIASYbry4GT4AMh0IQHPCwNwIgHPCwHJ0AHOIclQ7s4N0CDXSXAf+gKAHWEB9ABw+gJw+gJwzwtgIM81LQFEjoABVQ+8nnESzwsAUCPOyVACzCHZ4XASzwsAEs5VATAh2S4B/smBAKP7AMhwIQHPCwCAEWEizlHhzFIVzws/gBdhAcwIwACAFmFVCMyAFWEByweAFGEBy3+AE2EBy/+AFGEBy/+OLzBQksoHyVAEzMlQDMzJUALMye1UgBAxMTExMTExMTExMTExMVUBMFUCMFUCMAHZIiHgcRXPCwAczhrLfyIvADZwcFULVRoBVRpVGgFVClUIVQpVCVUMVQxVDNkBBiLBEzEC/o6A4QLBEo5x7UTQ0wABwADyv3D4ZA7Q0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6AEnESzwthgBITzwsfVQ/TP9TUMFADzMlQBMzJcPsAMDExVQEwVQEwVQEwVQEwVQEwVQEwVQEwVQIwVQIwVQIwAdnh7UTQ0wAzMgDUAcAA8r9w+GQO0NMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOgBFxEs8LYYARE88LH1UP0z/UMFACzMlQA8zJcPsAMTFVATBVATBVATBVATBVATBVATBVATBVAjBVAjBVAjAB2QH+AsEUjnftRNDTAAHAAPK/cPhkDtDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoAUcRLPC2GAFBPPCx9VD9M/1NTTB9N/MFAFy3/JUAbMyXD7AF8DMTFVATBVATBVATBVATBVATBVATBVATBVAjBVAjBVAjAB2eHtRDQA5NDTAAHAAPK/cPhkDtDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACzoATcRLPC2GAExPPCx9VD9M/1NTTBzBQBMsHyVAFzMlw+wBbMTFVATBVATBVATBVATBVATBVATBVATBVAjBVAjBVAjAB2QEGIsEYNgIMjoDhIsEWPzcC/o6A4e1E0NMAAcAA8r9w+GQP0NMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOVQ/TP4AVcRTPC2GAFRXPCx8B1NTTB9N/0//T/zBQBsv/yVAIzMlw+wBfBTFVATBVATBVATBVATBVATBVATBVATBVATBVATBVAjBVAjA5OAAKVQIwAdkBBgLBFzoC/o6A4e1E0NMAAcAA8r9w+GQO0NMBAcACyAHysHMhAc8LAXAiAc8LAcnQAc4C+kAwUALOD9M/1NSAFnGAFGEBzwthgBYXzwsfAtMH03/T/9P/1fpAMFAHzslQCszJcPsAXwMxMTExMTFVATBVATBVATBVATBVATBVATBVATBVAjA8OwAQVQIwVQIwAdkBOO1E0NMAAcAA8r/TP9TU0wfTf9P/0//V+kDV0wA9AdaOZoAZYdDTAQHAAsgB8rBzIQHPCwFwIgHPCwHJ0AHOAvpAMFACznHPC2GAF4AXE88LHxPOyVACzMlw+wAxMTExMTExMTExMTFVATBVATBVATBVATBVATBVATBVATBVAjBVAjBVAjAB2QLAAD4API4TcPhkyIEEAM8LCnDPC//J0DEh2eBw+GT6QDAh2QEGIsEaQAIMjoDhAsEZTEECRI6A4e1E0NMAAcAA8r/TP9TU0wfTf9P/0//V+kDV0wABwABFQgEgjoAgWQFVAeAB+kAxIVUB2UMB6jDU1dMAjmuAHGHQ0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs6AGHESzwthgBgTzwsfFM4Sy3/JAczJcPsAMTExMTExMTExMTExMTFVATBVATBVATBVATBVATBVATBVATBVAjBVAjBVAjAB2QLAAEQATo4acHD4ZMiBBADPCwpwzwv/ydBVATAiWQFVAdngcPhk+kDTfzAi2QFgBvKoBPLgRDAH+QFUEIT5EMAA8mjtRNDTAAHAAPK/0z/U1NMH03/T/9P/1fpA1dMARgEkjoACwACWcCJwVSDZ4PpAcSPZRwEKAdTV0wBIATSOgALAAJxwcCNwVQEBVRJVA9ng+kDTf3Ek2UkBmlYTVhq+gBRhwwCwAtIHMALyfPgjgQPoqIIIG3dAoFYZAblwIYAbYVUB4wQB8rxw+GQIwACAFWHwAwPy4G5WF4ARYbry4GRWESO58tBlSgH8jljIcSEBzwsAcCIBzwsAUZnMUFXOEst/EsoHyVACzFBlyz8EyVCVzhTMyVDSzBvMGcsHF8t/Fcv/Gsv/FszJ7VSAGTExMTExMVUBMFUBMFUCMFUCMFUCMAHZBMAA+ACOF8AA8uBqVQMwVQMwIlUCVQFVA1UDVQPZ4CW6UWZZSwAQ4wRFFOMEI9kBBiLBHE0CcI6A4QLAGvKpBvKoBPLgRDAH+QFUEIT5EMAA8mjtRNDTAAHAAPK/0z/U1NMH03/T/9P/1fpA1dMAVE4BJI6AAsAAlnAicFUg2eD6QHEj2U8BCgHU1dMAUAE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNlRAf5WE1YavoAUYcMAsALSBzAC8nz4I4ED6KiCCBt3QKBWGQG5cCGAG2FVAeMEAfK8cPhkgBVh8AQMwADy4G5WGIASYbry4GT4AMh2IQHPCwNwIgHPCwHJ0AHOgBsSzwsfE87Lf1AizgHJA8AACvoCgBhhAfQAcPoCcPoCcc8LYRLMUgH+yXP7AMhwIQHPCwBRIss/gBNhAcxR0c6AEmFVDcxRk8yAEWFVCcsHVQ8By38fy/9VDwHL/44qMFBDygfJUA3MyVACzMkBzMntVIAaMTExMTExMTExMVUBMFUCMFUCMAHZKiHgcRTPCwAXzhXLfyFwcFUEVQFVBVUEVQNVFgFVB1MABlUH2QFuAsAc8qkwBfKoMALy4EQwBfkBVBBi+RDAAPJo7UTQ0wABwADyv9M/1NTTB9N/0//T/9X6QNXTAFUBJI6AAsAAlnAicFUg2eD6QHEj2VYBEAHU1dMAAcAAVwEmjoAgWQFVAeAB+kDTfzExIVUB2VgB/jAvVhS+VQ/DALAB0gcwAfJ8+COBA+iogggbd0CgVhMBuXAhgBVhVQHjBAHyvHD4ZATAAPLgblL6uvLgZPgAyHAhAc8LAFEzzFGjygfJUArMyVB5zhjMyQfLPxvMGcwXywcVy38Ty/8Xy/8WzMntVIAcMTExMTExVQIwVQIwVQFZAALZAgEgW1sABTyNoAEy3wHQ0wABwADysCDWAdMAlu1A7VDbMALAAF0CkI6A4DAD0h8BwP/4APLgaNMfIcEbmzDAG/LgaHAxMQHZ4QHAD/LgaO1E0NMAAcAAAtN/MALyv9M/1NTTB9N/0//T/9X6QNXTAGReASqOgALAAJlwcCMBVRFVAtng+kBxI9lfAQoB1NXTAGABNI6AAsAAnHBxI3BVAgFVA1US2eD6QNN/cCTZYQFYyHAhAc8LAFHRzoARYYAWYaCAFWEvyz+AFWEBzIAUYQHMgBNhAcsHy38E0gdiAf6OUxvMjiQwUC/KB8lQDszJAczJUAnMye1UcDExMTExMTExMTExMTExAdkmIeBxFs8LABjOFst/I3BwVQJVH1VLgBFhVR5VC1UdVQ2AEWGAEWGAEWHZDMAAgBNhVQbL/4ASYQHL/59WEFUBMCxVAVWiVQ1VHNkiAeBxJgHPCwAeYwAGzizZAZAwI9cNH2+jwACecDExVQEwVQEwVQEwAdngMCTXScAA8nDAAJxwVQEwVQEwVQEwAdngbQTTH59wMTExVQEwVQEwVQEwAdkiwRBlAgyOgOEiwQ2OZgIMjoDhIsEMcmcBuo6A4QLACyJwVSDh7UTQ0wAwwADyfvgAcPhk8AHIcCEBzwsAUSLMcCMBzwoHyQHMyVAzzhLMyXASzws/FswUzBLLB3DPC3/L/8v/zMntVIALMTFVATBVATBVATAB2WgBOO1E0NMAAcAA8r/TP9TU0wfTf9P/0//V+kDV0wBpASqOgALAAJlwcCMBVRFVAtng+kBxI9lqAQoB1NXTAGsBNI6AAsAAnHBwI3BVAQFVElUD2eD6QNN/cSTZbAGWcPhkAdIHMAfAAIAVYfACA/LQb4AaYdMA0wDTAPpAMC4BxwXAAPLQZF8DVhEhufLQZSHTASHBA5gwwAPy0GPyNOEBwALytNMAAcAAbQEgjoAgWQFVAeAB+gQxIVUB2W4BUDDSB9P/MMAA8tBl+AAwKtMBIcEDmDDAA/LQY/I04QHAAvK00wABwABvASCOgCBZAVUB4AH6BDEhVQHZcAH8yHYhAc8LA3AiAc8LAcnQAc6ADxLPCx8kAct/UFXOVhJVBMv/A9IH0/8wUATL/wX6AgTJgBNhVQOhBcAAgBthVQT0AHD6AnD6AnHPC2ESzMlz+wDIcCEBzwsAgBZhIcs/gBZhAcyAFWEBzIAUYQHLBxbLf4ASYQHL/1HxznEScQCszwsAgBFhVQ/L/1HRzhvMjigwULXKB8lQBMzJUAnMyVAJzMntVIAMMTExMTExMTExMTExMVUBMAHZIyHgUIvOFst/KXBwVRlVJlUXAVUWVRkBVQtVC9kBCDAhwQ5zAj6OgOHtRNDTAAHAAPK/0z/U1NMH03/T/9P/1fpA1dMAeXQBKo6AAsAAmXBwIwFVEVUC2eD6QHEj2XUBCgHU1dMAdgE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNl3Af5w+GQHwACAFGHTHzAC0gcwAfLQb4AXYdMA0wDTAPpAMFPAxwXAAPLQZMh2IQHPCwNwIgHPCwHJ0AHOEs4GzwsfVhMBy39wFvoCBckLwACAG2FVBfQAcPoCcPoCcc8LYRvMyYBA+wDIcCEBzwsAgBdhIcs/gBdhAcxVDyPOgBZheADqVQHMcRTPCwBR7s4czIAUYVUCyweAE2EBy3+AEmEBy/+AEWEBy/+OKDBQYsoHyVAFzMlQCczJUAPMye1UgA0xMTExMTExMTExMTExVQEwAdktIeBQns4Xy38scHBVDVUcAVUNVShVC1ULVRhVC1UcAVUOVQ7ZAQYBwQ96Aj6OgOHtRNDTAAHAAPK/0z/U1NMH03/T/9P/1fpA1dMAgXsBKo6AAsAAmXBwIwFVEVUC2eD6QHEj2XwBCgHU1dMAfQE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNl+AaCAF2HTANMA0wD6QHD4ZDAvAccFwAAF0gcwBfLQZvgAyHAhAc8LAIAYYSHLP4AYYQHMgBFhI86AF2FVAcwHwACAF2HTfzCAFmGggBZhVQjLB38B5I5cVQ8BzI4sMFC2ygfJUAXMyVADzMlQCMzJ7VSADjExMTExMTExMTExMTExVQEwVQEwAdklIeBxGc8LAB7OHMt/JnBwVRpVDFUMVQtVGVUJVQtVC1UZVR0BVQ5VDtlVD8AAUDLLf4AVYQHL/4AUYQHL/4AAPJ0lVQEwIlXSgBFhVS7ZIgHgcScBzwsAgBFhAc4j2QE47UTQ0wABwADyv9M/1NTTB9N/0//T/9X6QNXTAIIBKo6AAsAAmXBwIwFVEVUC2eD6QHEj2YMBCgHU1dMAhAE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNmFARiAFGHTf9P/0/9w+GSGAVaOgCLAAAfSB51wcVUDMCNVAlUTVSLZMSgB4Mh0zwsCIQHKBxTL/8nQcCLZhwFWyHAhAc8LAHAhAc8LP1YVI85WHVUBzFYcAcxWGwHLB3DPC39WGQHL/xnL/4gBRI6AmXEUzwsAFc4i2SUB4SJVAzBVAzAhVQJVBFUDVQRVE9mJAaxWEAHMUxfPCgfJAczJUAjMgB9h0wDTANMA+kAwBMkE0wFxHc8LAVBYzMlWE1UHzHHPCwDMcM8LAMn5ACTBA5lfBMAD8tBj8jThBMAC8rRfAwbTAAHAAIoBII6AIFkBVQHgAfoEMSFVAdmLAXYw0gfT/zBQB7ry4Gf4AMhwIQHPCwCAHGEhyz+AHGEBzIAVYSPOgBthVQHMC8AAVQmAGWGggBlhVQvLB4wB9o5kgBNhAcyOLzBQxsoHyVAFzMlQA8zJUAnMye1UgA8xMTExMTExMTExMTExMTExMVUBMFUBMAHZJSHgcRnPCwCAEWEBzlUPAct/KHBwVR1VD1UeVQ5VHFUKVQ5VDlUaVR1VD1UP2YATYcAAUDLLf4AYYQHL/4AXYQHL/40ARo4RJVUBMCKAEXNjgBRhc4ASY9kiAeBxJwHPCwCAFGEBziPZAQYiwRqPAgyOgOEiwRmgkAJgjoDhAsAQInBVFQFVAVUVVQdVJeHtRNDTAAHAAPK/0z/U1NMH03/T/9P/1fpA1dMAmpEBKo6AAsAAmXBwIwFVEVUC2eD6QHEj2ZIBCgHU1dMAkwE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNmUARpWFNdLcPhkIcEsBNIHlQFYjoAxJSHhcRO68uBDAsAA8uBCgBZh1SJwVQGAFHZjgBdhgBZhcoAYY4AZYdmWAbAwgBdh+kDRC8AA8tBvgBth0wDTANMA+kAwLwHHBcAA8tBk+ADIdCEBzwsDcCIBzwsBydABziHJVQ9VAc4B0CDXSXAT+gKAHWEB9ABw+gJw+gJwzwtgIM81lwE4joAEvJxxzwsAA87JUALMIdnhcM8LAM5VATAh2ZgBosmBAKP7AMhwIQHPCwBxIgHPCwCAEWEhzoAcYSPLP4AVYVUEzoAbYVUBzIASYVUCzAzAAIAZYVUBzIAYYQHLB4AXYQHLf4AWYQHL/4AVYQHL/5kAuo4uMFCUygfJUAvMyVAKzMkBzMntVIAQMTExMTExMTExMTExMTExMTFVATBVATAB2SIh4FUPVQTOH8t/LnBwVQ9VHVUPVR1VD1UtVQ5VDVUMVQ9VDVUPgBFhgBFh2QE47UTQ0wABwADyv9M/1NTTB9N/0//T/9X6QNXTAJsBKo6AAsAAmXBwIwFVEVUC2eD6QHEj2ZwBCgHU1dMAnQE0joACwACccHAjcFUBAVUSVQPZ4PpA039xJNmeAWJw+GQB0gcwB8AAgBVh8AMD8tBvgBph0wDTANMA+kAwLgHHBcAA8tBkXwNWESO58tBlnwD6jlXIcSEBzwsAUZnOcCIBzwsAUIjMUDnOy38WygfJUAbMVQ9VA8s/AclQhM4TzMlQ1swbzBnLBxfLfxXL/xPL/xLMye1UgBkxMTExMTExMVUBMFUBMAHZBMAA+ACOEcAA8uBqVQIwVQIwIlkBVQHZ4CS6UVVZ4wREE+MEItkBBiLBG6ECPo6A4e1E0NMAAcAA8r/TP9TU0wfTf9P/0//V+kDV0wCnogEqjoACwACZcHAjAVURVQLZ4PpAcSPZowEKAdTV0wCkATSOgALAAJxwcCNwVQEBVRJVA9ng+kDTf3Ek2aUB/nD4ZAHSBzCAFWHwBAvAAPLQb4AbYdMA0wDTAPpAMC8BxwXAAPLQZPgAyHYhAc8LA3AiAc8LAcnQAc6AGxLPCx8WzhTLf1BUzgPJBsAAUDz6AoAcYQH0AHD6AnD6AnHPC2EVzMlz+wDIcCEBzwsAgBdhIcs/gBdhAcxVDyPOgBamAO5hVQHMcRTPCwBR7s4czIAUYVUCyweAE2EBy3+AEmEBy/+AEWEBy/+OKTBQUsoHyVAEzMlQCczJUALMye1UgBoxMTExMTExMTExMTExMVUBMAHZLSHgUJ7OF8t/LHBwVQ1VHAFVDVULVShVC1UYVQtVHAFVDlUO2QEGIsEcqAI+joDh7UTQ0wABwADyv9M/1NTTB9N/0//T/9X6QNXTALCpASqOgALAAJlwcCMBVRFVAtng+kBxI9mqAQoB1NXTAKsBNI6AAsAAnHBxI3BVAgFVA1US2eD6QNN/cCTZrAF4+ABwcPhkAtIHMIAWYfpA038wA/LQa4AaYdMA0wDTAPpAMCnHBcAA8tBsXwNTQrny0G1WESO58tBlCcAArQGAjoAhIeAr0wEhwQOYMMAD8tBj8jThAcAC8rTTAAHAAI4RMNIH0/8wMVUEMCEBVTFVBNkgWQFVAeAB+gQxIVUB2a4B/sh2IQHPCwNwIgHPCwHJ0AHOgA8SzwsfUMzOUkzLf1YRAcv/UWShUFbL/3Ab+gIKyYASYVUDoYAaYVUK9ABw+gJw+gJxzwthEszJgED7AMhwIQHPCwCAFWEhyz+AFWEBzIAUYQHMgBNhAcsHE8t/gBFhAcv/cSIBzwsAUPLOVQ+vAKBVDsv/jiwwULPMUHfOFct/EsoHyVAEzMlQBszJAczJ7VSAGzExMTExMTExMTFVATAB2SUh4FHTzi1VGwFVDFUKVRtVGwFVDFUJVSpVDVUN2QFGAsAcInBZ4e1E0NMAAcAA8r/TP9TU0wfTf9P/0//V+kDV0wCxASqOgALAAJlwcCMBVRFVAtng+kBxI9myAf4B1NXTAAHAAI5ycPhkMAPAAAPSBzAD8tBvMIATYdMA0wDTAPpAMCYBxwXAAPLQZPgAyHEhAc8LABfOFMxwJgHPCwBRVcoHyQHMyVCFzhTMyVDiyz8czBrMGMsHFst/FMv/Esv/FszJ7VSAHDExMTExMTExMVUBMFUBMAHZIFkBswAcVQHgAfpA038xMSFVAdk=';
function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

let gasFeeALL = 0;

 
function deployingTokenRootMain() {


  exec(`mkdir ./tokens/RootToken${nameRootToken}`,  ()=> {
    exec(`./tonos-cli genphrase > ./tokens/RootToken${nameRootToken}/seedphrase`, 
      function(error, stdout, stderr){                
        if(error) throw error; 

        fs.readFile(`./tokens/RootToken${nameRootToken}/seedphrase`,   "utf8",
          function(error, fileContent){
            if(error) throw error;
            
            const seedphrase =  fileContent.slice(fileContent.indexOf("\""), fileContent.length-1);
            console.log(seedphrase);
            exec(`./tonos-cli getkeypair ./tokens/RootToken${nameRootToken}/deploy.keys.json ${seedphrase}`,
              () => {          
              exec(`./tonos-cli genaddr RootTokenContract.tvc RootTokenContract.abi --setkey ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0 > ./tokens/RootToken${nameRootToken}/addr`,
                (error, stdout, stderr) => {
                  if (error) {
                      console.log(`error: ${error.message}`);
                      return;
                  }
                  if (stderr) {
                      console.log(`stderr: ${stderr}`);
                      return;
                  }
                  // console.log(`stdout: ${stdout}`);
                  
                  fs.readFile(`./tokens/RootToken${nameRootToken}/addr`, "utf8", 
                    (err, addr) => {
                    if(err) throw error;
                    
                    const startAddr = addr.indexOf("0:");
                    rawAddress = addr.slice(startAddr, startAddr+66);
                    console.log(rawAddress);  //"{" + strAddress + "}"
                    
                    fs.appendFile(`./tokens/RootToken${nameRootToken}/address.json`, "{ \"address\": " + "\"" + rawAddress + "\"}" , 
                      function(error){
                        if(error) throw error;
                    
                      // exec(`./tonos-cli account ${rawAddress}`,
                      //   (error, stdout, stderr) => {
                      //     if (error) {
                      //         console.log(`error: ${error.message}`);
                      //         return;
                      //     }
                      //     if (stderr) {
                      //         console.log(`stderr: ${stderr}`);
                      //         return;
                      //     }
                      //   console.log(`stdout: ${stdout}`)
                      
                        // exec(`./tonos-cli call ${giverGiverAdress} sendTransaction '{"dest":"${rawAddress}", "value":1000000000, "bounce":false}' --abi ./giver/giver.abi.json --sign ./giver/giver.key.json`,
                        exec(`./tonos-cli call ${giverGiverAdress} sendTransaction '{"dest":"${rawAddress}", "value":1000000000, "bounce":false}' --abi ./giver.abi.json --sign ./giver.key.json | tee ./send.log`,
                          (error, stdout, stderr) => {
                            if (error) {
                                console.log(`error: ${error.message}`);
                                return;
                            }
                            if (stderr) {
                                console.log(`Ошибка транзакции: ${stderr}`);
                                return;
                            }
                          console.log(`stdout: ${stdout}`);

                          const contractJson = fs.readFileSync(`./tokens/RootToken${nameRootToken}/deploy.keys.json`,{encoding: "utf8"});
                          const contractData = JSON.parse(contractJson);

                          contractKeysPublic = contractData.public;
                          contractKeysSecret = contractData.secret;
                          console.log(`Key public: ${contractKeysPublic}`);

                          
                          const nameRootTokenHex   = toHex(nameRootToken);
                          const symbolRootTokenHex = toHex(symbolRootToken);
                          setTimeout(()=> {                                                          
                              exec(`./tonos-cli account ${rawAddress}`,
                              (error, stdout, stderr) => {
                                if (error) {
                                    console.log(`error: ${error.message}`);
                                    return;
                                }
                                if (stderr) {
                                    console.log(`stderr: ${stderr}`);
                                    return;
                                }
                                console.log(`stdout: ${stdout}`);

                                  //546f6b656e41  ${nameRootToken}
                                exec(`./tonos-cli deploy RootTokenContract.tvc '{"name":"${nameRootTokenHex}","symbol":"${symbolRootTokenHex}", "decimals":"0","root_public_key":"0x${contractKeysPublic}", "root_owner":"0", "wallet_code":"'${TVM_WALLET_CODE}'","total_supply":"1000"}' --abi RootTokenContract.abi --sign ./tokens/RootToken${nameRootToken}/deploy.keys.json --wc 0`,
                                  (error, stdout, stderr) => {
                                    if (error) {
                                        console.log(`error: ${error.message}`);
                                        return;
                                    }
                                    if (stderr) {
                                        console.log(`stderr: ${stderr}`);
                                        return;
                                    }
                                    console.log(`stdout: ${stdout}`);
                                })
                            })
                          }
                         , 500);
                      
                        })
                      // });  

                    });
                  });                  
              });
            });
          // ./tonos-cli genaddr RootTokenContract.tvc RootTokenContract.abi --setkey deploy.keys.json --wc 0
        });
    });
  }); 

} 

deployingTokenRootMain ();