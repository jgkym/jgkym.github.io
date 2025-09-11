float32, fp32 or single precision, default format for storing tensors

float16, fp16 or half precision, cut down the memory
but the dynamic range (especially for small numbers) issue -> underflow

bfloat16
Google Brain developed it to address the dynamic range issue of float16 in 2018

fp8
standardized in 2022
H100s support two variants of FP8: E4M3 and E5M2

tradeoffs between memory and stability
-> use mixed precision training


to utilize the parallelism of GPUs, move tensors to GPU memory

tensors in PyTorch, just pointers pointing allocated memory
given a 2d-tensor `x` as a matrix, the index of element i, j is
`index = i * x.stride(0) + j * x.stride(1)` 

view of the tensor != a copy, mutations in one tensor affects the other.
some views are non-contiguous entries, why?
non-contiguous -> not possible further views

`triu`, useful for computing an causal attention mask 

Einops, a library for manipulating tensors where dimensions are named
why we use it instead of `transpose`? easy to mess up the dimensions
i'm just a stupid, so i usually confuse a dimension aggregating some tensors

jaxtyping way, just documentation for dimensions

`einsum`, generalized matrix multiplication with good bookkeeping
`...` represents broadcasting
`reduce`, reduce a single tensor

FLOP (floating-point operation), a basic operation like addition or multiplication
FLOPs: floating-point operations (measure of computation done)
FLOP/s: floating-point operations per second (also written as FLOPS), which is used to measure the speed of hardware.

FLOPs of a matrix multiplication
`x: (B, D), w: (D, K)`
`x @ w`: `B * D * K` multiplications + `B * D * K` additions = Total `2 * B * D * K` FLOPs

Most expensive operation in deep learning, matrix multiplication for large matrices

FLOPs for general Transformers
- Forward pass: 2 (# data points) (# parameters) FLOPs
- Backward pass: 4 (# data points) (# parameters) FLOPs
- Total: 6 (# data points) (# parameters) FLOPs

Parameter initialization
random assign -> variant parameters -> unstable training
weight init (e.g., Xavier's) -> invariant parameters -> more robust
be extra safe, use the truncated normal (`nn.init.trunc_normal_`), avoid any chance of outliers

Pinned Memory
by default, CPU tensors are in paged memory.
what is the paged memory?

we can explicitly 'pin'
pinning? allow us to copy `x` from CPU into GPU 'asynchronously'
it means that it would be synchronous without pinning and there would be a bottleneck

pinned memory allow us to do two thing in parallel
- 다음 데이터 배치를 cpu에 갖다와
- 동시에 gpu에너는 x를 처리함

three places to set the random seed
- Torch: `torch.manual_seed(seed)`
- NumPy: `np.random.seed(seed)`
- Python: `random.seed(seed)`


convenient to serialize data as numpy array in language modeling
save: `ndarray.tofile()`

avoid load the entire data into memory at once, since data is super huge.
lazy load only the accessed parts into memory.
load: `np.memmap()`


