
### 1. graph embedding
어텐션 메커니즘을 통해 그래프를 학습시키기 위해서는 그래프에 대한 정보를 dense vector로 나타내어야 함
SMILES strings를 Rdkit을 활용해서 그래프로 표현함. PyG의 from_smiles를 사용했음
node에 해당되는 atom의 경우 9가지 고유의 features가 있음.
edge의 경우는 bond에 해당되고 이에 상응하는 3가지 features가 있음

> When you use the convenient torch_geometric.utils.from_smiles utility, it generates a standardized set of features. A look at the source code for this function reveals a predefined mapping for atomic (node) and bond (edge) properties.
> 
> For nodes (atoms), it typically extracts 9 features:
> 	- Atomic Number: The element of the atom.
> 	- Chirality: The 3D spatial arrangement of the atom.
> 	- Degree: The number of bonds connected to the atom.
> 	- Formal Charge: The electric charge of the atom.
> 	- Number of Hydrogens: The count of bonded hydrogen atoms.
> 	- Number of Radical Electrons: The count of unpaired electrons.
> 	- Hybridization: The type of orbital hybridization (e.g., SP, SP2, SP3).
> 	- Is Aromatic: A boolean indicating if the atom is part of an aromatic ring.
> 	- Is in Ring: A boolean indicating if the atom is part of any ring structure.
> 
> For edges (bonds), it extracts 3 features:
> 	- Bond Type: The type of bond (e.g., single, double, triple, aromatic).
> 	- Stereo: The stereochemistry of the bond (e.g., cis, trans).
> 	- Is Conjugated: A boolean indicating if the bond is part of a conjugated system.

ESA의 경우 edge를 중심으로 그래프에 대한 정보를 취합함. 

하나의 edge에 source와 target node의 features를 추가하기에 기존 edge features에 2 * node features 만큼 dimension이 늘어남. 

the attention mechanism expects fixed-size sequences
we have now a bunch of edges in the batch,
we need to get each edge know which graph it comes from , `batch_mapping`
`to_dense_batch`, groups to make each example have the same sequence length (fixed to the maximum edges among graphs in the batch)  



