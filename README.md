# incrementExcelAlphabets
JavaScript code to increment alphabets by increment count (default as 1)


getNextKey('A')
'B'
> getNextKey('A', 2)
'C'
> getNextKey('A', 4)
'E'
> getNextKey('AZ', 1)
'BA'
> getNextKey('AZ', 2)
'BB'
> getNextKey('AZ', 3)
'BC'
> getNextKey('AY', 3)
'BB'
> getNextKey('AY', 1)
'AZ'
> getNextKey('AY', 2)
'BA'
> getNextKey('AYY', 3)
'AZB'
