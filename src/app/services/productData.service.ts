import *  as  productData from '../../assets/productData.json';

export class ProductData {

    searchText: string | undefined;
    onlyStocked: boolean = false;
    productJson: any;

    setSearchText(srchTxt: string, onlyStocked: boolean) {
        this.searchText = srchTxt;
        this.onlyStocked = onlyStocked;
        this.productJson = (productData as any).default;
        return this.filterProduct(this.searchText, this.onlyStocked);
    }

    filterProduct(srchTx: string, onlyStocked: boolean) {
        var result = [];
        this.productJson = (productData as any).default;
        if (srchTx) {
            if (srchTx.trim()) {
                for (let i = 0; i < this.productJson.length; i++) {
                    if (this.productJson[i].name.includes(srchTx))
                        if ((onlyStocked && this.productJson[i].stocked == true) || !onlyStocked)
                            result.push(this.productJson[i]);
                }
            }
        } else {
            for (let i = 0; i < this.productJson.length; i++) {
                if ((onlyStocked && this.productJson[i].stocked == true) || !onlyStocked)
                    result.push(this.productJson[i]);
            }
        }
        return result;
    }

}