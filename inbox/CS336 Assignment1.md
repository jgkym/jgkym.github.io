## Problem `unicode1`: Understanding Unicode

a. What Unicode character does `chr(0)` return?
```
'\x00'
```

b. How does this character's string representation (`__repr__()`) differ from its printed representation? 
`"'\\x00'"` vs empty 

c. What happens when this character occurs in text? It may be helpful to play around with the following in your Python interpreter and see if it matches your expectations:
```python
>>> chr(0)
>>> print(chr(0))
>>> "this is a test" + chr(0) + "string"
>>> print("this is a test" + chr(0) + "string")
```

## Problem (`unicode2`): Unicode Encodings

a. What are some reasons to prefer training our tokenizer on UTF-8 encoded bytes, rather than UTF-16 or UTF-32? It may be helpful to compare the output of these encodings for various input strings.
