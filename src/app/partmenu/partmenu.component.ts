import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../playground/recursive-tree/employee';
import { Content } from '../services/all.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-partmenu',
  templateUrl: './partmenu.component.html',
  styleUrls: ['./partmenu.component.css']
})
export class PartmenuComponent implements OnInit {

  categories: Content[] = [];

  @Input() treeData: any;// Employee[];
  public employees: Employee[] = [];

  constructor(private _categoryService: CategoryService) { }
  

  ngOnInit(): void {
    // this.getCategories();
    this.treeData = [
      {
        "categoryId": 0,
        "categoryName": "Category 0",
        "parentCategoryId": null,
        "children": []
      },
      {
        "categoryId": 1,
        "categoryName": "Category 1",
        "parentCategoryId": null,
        "children": [
          {
            "categoryId": 2,
            "categoryName": "Category 1-1",
            "parentCategoryId": 1,
            "children": [
              {
                "categoryId": 4,
                "categoryName": "Category 1-1-1",
                "parentCategoryId": 2,
                "children": [
                  {
                    "categoryId": 6,
                    "categoryName": "Category 1-1-2",
                    "parentCategoryId": 4,
                    "children": []
                  },
                  {
                    "categoryId": 7,
                    "categoryName": "Category 1-1-3",
                    "parentCategoryId": 4,
                    "children": []
                  }
                ]
              },
              {
                "categoryId": 5,
                "categoryName": "Category 1-1-2",
                "parentCategoryId": 2,
                "children": []
              }
            ]
          },
          {
            "categoryId": 3,
            "categoryName": "Category 1-2",
            "parentCategoryId": 1,
            "children": []
          }
        ]
      }
    ];
  
  }

  getCategories(): void {
    this._categoryService.getCategories().subscribe(response => { this.categories = response.content; console.log(JSON.stringify(response.content));});
  }




  getCategoriesTree(): void {
    const res = {
      "content": [
          {
              "categorySummary": {
                  "category": {
                      "categoryId": "/84702/80011/1282094267/1200003271/",
                      "categoryName": "Categoria A1"
                  },
                  "totalNoOfProducts": 30,
                  "minPrice": 2.0,
                  "maxPrice": 30.0
              },
              "filterDetails": [
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "1",
                              "brandName": "Adidas"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "red"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "white"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 4
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "M"
                              },
                              "totalNoOfProducts": 6
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "high"
                              },
                              "totalNoOfProducts": 2
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "2",
                              "brandName": "Nike"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "red"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXL"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 10
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "3",
                              "brandName": "GoodYear"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "red"
                              },
                              "totalNoOfProducts": 2
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 2
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXL"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 10
                          }
                      ]
                  }
              ]
          },
          {
              "categorySummary": {
                  "category": {
                      "categoryId": "/84702/80011/1282094267/1200003272/",
                      "categoryName": "Categoria A2"
                  },
                  "totalNoOfProducts": 0,
                  "minPrice": 3.0,
                  "maxPrice": 100.0
              },
              "filterDetails": [
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "1",
                              "brandName": "Adidas"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "blue"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "white"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 4
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "M"
                              },
                              "totalNoOfProducts": 6
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "high"
                              },
                              "totalNoOfProducts": 2
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "2",
                              "brandName": "Nike"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "black"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXL"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 10
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "4",
                              "brandName": "Cucubau"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "red"
                              },
                              "totalNoOfProducts": 2
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXXXXL"
                              },
                              "totalNoOfProducts": 2
                          }
                      ]
                  }
              ]
          },
          {
              "categorySummary": {
                  "category": {
                      "categoryId": "/84702/80011/1282094267/",
                      "categoryName": "Categoria A"
                  },
                  "totalNoOfProducts": 50,
                  "minPrice": 4.0,
                  "maxPrice": 30.0
              },
              "filterDetails": [
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "1",
                              "brandName": "Adidas"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "blue"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "white"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 4
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "M"
                              },
                              "totalNoOfProducts": 6
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "high"
                              },
                              "totalNoOfProducts": 2
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "2",
                              "brandName": "Nike"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "black"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "S"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXL"
                              },
                              "totalNoOfProducts": 5
                          },
                          {
                              "attribute": {
                                  "name": "impermeability",
                                  "value": "low"
                              },
                              "totalNoOfProducts": 10
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "4",
                              "brandName": "Cucubau"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "red"
                              },
                              "totalNoOfProducts": 2
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXXXXL"
                              },
                              "totalNoOfProducts": 2
                          }
                      ]
                  },
                  {
                      "brandSummary": {
                          "brand": {
                              "brandId": "3",
                              "brandName": "Goodyear"
                          },
                          "totalNoOfProducts": 10
                      },
                      "attributeSummary": [
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "purple"
                              },
                              "totalNoOfProducts": 2
                          },
                          {
                              "attribute": {
                                  "name": "color",
                                  "value": "green"
                              },
                              "totalNoOfProducts": 8
                          },
                          {
                              "attribute": {
                                  "name": "size",
                                  "value": "XXXXXL"
                              },
                              "totalNoOfProducts": 2
                          }
                      ]
                  }
              ]
          }
      ],
      "pageable": {
          "sort": {
              "unsorted": true,
              "sorted": false,
              "empty": true
          },
          "offset": 0,
          "pageNumber": 0,
          "pageSize": 3,
          "paged": true,
          "unpaged": false
      },
      "last": false,
      "totalElements": 9,
      "totalPages": 3,
      "size": 3,
      "number": 0,
      "sort": {
          "unsorted": true,
          "sorted": false,
          "empty": true
      },
      "numberOfElements": 3,
      "first": true,
      "empty": false
  };



  }

}
