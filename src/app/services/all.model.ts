
    export interface Category {
        categoryId: string;
        categoryName: string;
    }

    export interface Category2 {
        categoryId: string;
        categoryName: string;
    }

    export interface Category3 {
        categoryId: string;
        categoryName: string;
    }

    export interface CategoryChildren2 {
        category: Category3;
        categoryChildren: any[];
    }

    export interface CategoryChildren {
        category: Category2;
        categoryChildren: CategoryChildren2[];
    }

    export interface CategoryHierarchy {
        category: Category;
        categoryChildren: CategoryChildren[];
    }

    export interface RootObject {
        categoryHierarchy: CategoryHierarchy[];
    }


// export interface Category {
//     categoryId: string;
//     categoryName: string;
// }

// export interface CategorySummary {
//     category: Category;
//     totalNoOfProducts: number;
//     minPrice: number;
//     maxPrice: number;
// }

// export interface Brand {
//     brandId: string;
//     brandName: string;
// }

// export interface BrandSummary {
//     brand: Brand;
//     totalNoOfProducts: number;
// }

// export interface Attribute {
//     name: string;
//     value: string;
// }

// export interface AttributeSummary {
//     attribute: Attribute;
//     totalNoOfProducts: number;
// }

// export interface FilterDetail {
//     brandSummary: BrandSummary;
//     attributeSummary: AttributeSummary[];
// }

// export interface Content {
//     categorySummary: CategorySummary;
//     filterDetails: FilterDetail[];
// }

// export interface Sort {
//     sorted: boolean;
//     unsorted: boolean;
//     empty: boolean;
// }

// export interface Pageable {
//     sort: Sort;
//     offset: number;
//     pageSize: number;
//     pageNumber: number;
//     unpaged: boolean;
//     paged: boolean;
// }

// export interface Sort2 {
//     sorted: boolean;
//     unsorted: boolean;
//     empty: boolean;
// }

// export interface RootObject {
//     content: Content[];
//     pageable: Pageable;
//     totalElements: number;
//     totalPages: number;
//     last: boolean;
//     size: number;
//     number: number;
//     sort: Sort2;
//     numberOfElements: number;
//     first: boolean;
//     empty: boolean;
// }


