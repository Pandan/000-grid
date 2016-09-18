import {GridItem} from "./grid-item";
export class GridItemsService {

  getItems(): GridItem[] {

    return [
      new GridItem(
        "Perspective",
        "Mouse interaction using perspective and rotate3d()",
        "#1abc9c",
        "perspective"
      ),
      new GridItem(
        "parallax",
        "Parallax using background-position and translateZ()",
        "#34495e",
        "perspective-parallax"
      ),
      new GridItem(
        "page-scroll",
        "Exploring scroll functionality. Implementation of scrollStop and animations using interpolation.",
        "#9b59b6",
        "page-scroll"
      ),
      new GridItem(
        "",
        "Lorem dim sum Pan friend pork dumpling Pot sticker water chestnut cake bitter",
        "#3498db"
      ),
      new GridItem(
        "",
        "Lorem dim sum vegetarian crisp spring rolls dried scallop and leek puff deep",
        "#f1c40f"
      ),
      new GridItem(
        "",
        "Lorem dim sum Fung zao Ngao yuk kau Pai gwut Ma lai go",
        "#e67e22"
      ),
      new GridItem(
        "",
        "Lorem dim sum coconut milk pudding black sesame soft ball deep fried bean",
        "#e74c3c"
      ),
      new GridItem(
        "",
        "Lorem dim sum Wu gok Cha siu bao Lo mai gai baked barbecue",
        "#bcc3c7"
      ),
      new GridItem(
        "",
        "Lorem dim sum Cha siu bao Lo mai gai baked barbecue pork bao",
        "#2ecc71"
      ),
      new GridItem(
        "",
        "Lorem dim sum steamed sponge cake tofu with syrup Jin deui Chicken feet",
        "#16a085"
      )
    ];

    /*
    return [
      new GridItem(
        "#eca088"
      ),
      new GridItem(
        "#abcbd6"
      ),
      new GridItem(
        "#6b5470"
      ),
      new GridItem(
        "#efdba5"
      ),
      new GridItem(
        "#7bc1a1"
      )
    ]
    */

  }

}
