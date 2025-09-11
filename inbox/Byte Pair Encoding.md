most common choice for LLM tokenizer

일반적인 워크플로우
text -> unicode code points -> sequence of bytes -> train a tokenizer


ascii, limited coverage for text representation like non-english languages, emojis
unicode, a text encoding standard, around 160k characters -> integer code points 

can possible map the entire 160k items as tokens? impractice
too large vocab & sparse embedding vectors

instead, use a sequence of bytes -> 256-length vocab is a good starting point

q. why the utf-8 is more dominant than the others?

byte-level tokenization, address issues faced by word-level tokenizations
-> but long input sequences -> more computations + slower training

subword-tokenization, a midpoint between word-level and byte-level tokenization
larger vocab size <-> better compression

BPE, popular algorithm that consists of suitable subwords

bbpe tokenizer training procedure -> 3 main steps
vocab initialization -> pre-tokenization -> compute BPE merges

1. vocabulary initialization, one-to-one mapping from bytestring token to integer ID. in bbpe, size 256
2. pre-tokenization 




