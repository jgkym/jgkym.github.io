---
created: 2025-06-02 14:34:39
modified: 2025-06-02 15:38:52
tags:
  - linear-algebra
---
> [!tldr]
> Elementary matrices are like the building blocks of matrix operations. They simplify complex matrices, help us understand Gaussian elimination, and reveal important relationships between matrices.

### Elementary Matrices
- **What they are:** Elementary matrices are special types of non-singular matrices obtained by performing a single elementary row or column operation on an identity matrix.
- **Why they're important:**
    - They provide a clear, formal way to represent and perform elementary row/column operations.
    - They are fundamental to understanding Gaussian elimination and Gauss-Jordan elimination.
    - Their inverses are also elementary matrices of the same type, which means every elementary operation is reversible by another elementary operation.
    - Any invertible (non-singular) matrix can be expressed as a product of elementary matrices.
- **The Big Three Types:** We primarily focus on three types of elementary matrices, corresponding to the three elementary row/column operations:
    - **Type I (Row/Column Swap):** Obtained by interchanging two rows or columns of the identity matrix.
    - **Type II (Row/Column Scaling):** Obtained by multiplying a single row or column of the identity matrix by a non-zero scalar.
    - **Type III (Row/Column Addition):** Obtained by adding a multiple of one row/column to another row/column of the identity matrix.
- **Left vs. Right Multiplication:**
    - Multiplying a matrix on the left by an elementary matrix performs a **row operation.**
    - Multiplying a matrix on the right by an elementary matrix performs a **column operation**.

### Equivalence and Uniqueness
- **Nonsingular Matrices:** Any nonsingular matrix can be expressed as a product of elementary matrices. This means you can get to any nonsingular matrix by a sequence of these basic operations.
- **Equivalent Matrices:** If matrix $B$ is obtained from matrix $A$ by multiplying $A$ by elementary matrices (either on the left for row operations or on the right for column operations), then $A$ and $B$ are considered equivalent matrices.
- **Why equivalence matters:**
    - **Row Equivalence:** If $A$ and $B$ are row equivalent (meaning $B$ was obtained from $A$ using only row operations), they have the same row space and the same null space (set of solutions to $Ax=0$).
    - **Column Equivalence:** Similarly, if $A$ and $B$ are column equivalent, they have the same column space and the same left null space (set of solutions to $x^TA=0$).
- **Unique Forms:**
    - **Row Reduced Echelon Form (RREF):** This is a unique form obtained by applying *only row operations* to a matrix. It's super useful for solving systems of linear equations, finding the null space, and determining the rank of a matrix.
    - **Rank Normal Form:** This form is achieved by applying *both row and column operations*. It's a highly simplified diagonal form that explicitly shows the rank of the matrix.

[@Meyer2000Matrix{131-138}]


### Reference