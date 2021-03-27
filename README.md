## Decimal Price Format
This javascript code Let you to have decimal price numbers which can be useful in cryptocurrencies price. This javascript method is exactly like PHP number_format but it is not limited to an integer.

### How To Use
Dependencies:
• Use last version of jquery
```sh
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```
• Use decimal-number-format.js
```sh
<script src="decimal-number-format.js"></script>
```
###### Use data-decimal-number attribute in a tag you want to show number
```<span data-decimal-number="">15651.12345</span>```


### Options
###### You can limit the decimal places
```<span data-decimal-number='{"decimalNumber":2}'>15651.12345</span>```

 ```
 That will be: 15,651.12
 ```
