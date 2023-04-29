<template>
    <div>
        <div v-for="attribute in attributes" :key="attribute.trait_type">
            <h2>{{ attribute.trait_type }}</h2>
            <div v-for="value in attribute.values" :key="value">
                <label>
                    <input type="checkbox" v-model="selectedValues" :value="value" />
                    {{ value }}
                </label>
            </div>
        </div>
        <div v-for="nft in filteredNFTs" :key="nft.incription_id">
            <h2>{{ nft.name }}</h2>
            <img :src="nft.high_res_img_url" alt="nft-image" />
            <ul>
                <li v-for="attribute in nft.attributes" :key="attribute.trait_type">
                    {{ attribute.trait_type }}: {{ attribute.value }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            nfts: [],
            attributes: [],
            selectedValues: []
        };
    },
    computed: {
        filteredNFTs() {
            return this.nfts.filter((nft) => {
                return this.selectedValues.every((value) => {
                    return nft.attributes.some((attribute) => {
                        return attribute.values.includes(value);
                    });
                });
            });
        }
    },
    mounted() {
        // Load the JSON data
        fetch("nft-data.json")
            .then((response) => response.json())
            .then((data) => {
                this.nfts = data;

                // Extract the unique attributes and their values from the NFT data
                this.attributes = data.reduce((acc, nft) => {
                    nft.attributes.forEach((attribute) => {
                        const existingAttribute = acc.find(
                            (a) => a.trait_type === attribute.trait_type
                        );
                        if (existingAttribute) {
                            if (!existingAttribute.values.includes(attribute.value)) {
                                existingAttribute.values.push(attribute.value);
                            }
                        } else {
                            acc.push({
                                trait_type: attribute.trait_type,
                                values: [attribute.value]
                            });
                        }
                    });
                    return acc;
                }, []);
            });
    }
};
</script>