function convertFromAmount(amount) {
    var currencyType, currencyResultType;
    var result

    currencyType = document.querySelector('input[name="currency"]:checked').value;
    currencyResultType = document.querySelector('input[name="currencyResult"]:checked').value;

    switch (currencyType) {
        case 'euro':
            if (currencyResultType == 'us') {
                result = amount * 1.13;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1.13:1";
            } else if (currencyResultType == 'uk') {
                result = amount * 0.09;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.09:1";

            } else if (currencyResultType == 'japan') {
                result = amount * 120.62;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "120.62:1";

            } else if (currencyResultType == 'canada') {
                result = amount * 1.54;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1.54:1";

            } else {
                result = amount * 1;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1:1";
            }
            break;

        case 'us':
            if (currencyResultType == 'euro') {
                result = amount * 0.89;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.89:1";
            } else if (currencyResultType == 'uk') {
                result = amount * 0.80;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.80:1";
            } else if (currencyResultType == 'japan') {
                result = amount * 106.82;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "106.82:1";
            } else if (currencyResultType == 'canada') {
                result = amount * 1.36;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1.36:1";
            } else {
                result = amount * 1;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1:1";
            }
            break;

        case 'uk':
            if (currencyResultType == 'euro') {
                result = amount * 1.11;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1.11:1";
            } else if (currencyResultType == 'us') {
                result = amount * 1.26;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1.26:1";
            } else if (currencyResultType == 'japan') {
                result = amount * 134.29;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "134.29:1";
            } else if (currencyResultType == 'canada') {
                result = amount * 1.71;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1.71:1";
            } else {
                result = amount * 1;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1:1";
            }
            break;

        case 'japan':
            if (currencyResultType == 'euro') {
                result = amount * 0.0083;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.00083:1";
            } else if (currencyResultType == 'us') {
                result = amount * 0.0094;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.00094:1";
            } else if (currencyResultType == 'uk') {
                result = amount * 0.0074;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.0074:1";
            } else if (currencyResultType == 'canada') {
                result = amount * 0.013;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.013:1";
            } else {
                result = amount * 1;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1:1";
            }
            break;

        case 'canada':
            if (currencyResultType == 'euro') {
                result = amount * 0.65;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.65:1";
            } else if (currencyResultType == 'us') {
                result = amount * 0.73;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.73:1";
            } else if (currencyResultType == 'uk') {
                result = amount * 0.58;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "0.58:1";
            } else if (currencyResultType == 'japen') {
                result = amount * 78.42;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "78.42:1";
            } else {
                result = amount * 1;
                document.getElementById('result').value = result.toFixed(2);
                document.getElementById('currency').value = "1:1";
            }
            break;
    }
}