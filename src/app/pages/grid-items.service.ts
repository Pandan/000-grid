import {GridItem} from "./grid-item";
export class GridItemsService {

  getItems(): GridItem[] {

    return [
      new GridItem(
        "Perspective",
        "Mouse interaction using perspective and rotate3d()",
        "#1abc9c",
        "perspective",
        "https://github.com/Pandan/000-grid/tree/dev/src/app/labs/perspective"
      ),
      new GridItem(
        "parallax",
        "Parallax using background-position and translateZ()",
        "#34495e",
        "perspective-parallax",
        "https://github.com/Pandan/000-grid/tree/dev/src/app/labs/perspective-parallax"
      ),
      new GridItem(
        "page-scroll",
        "Exploring scroll functionality. Implementation of scrollStop and animations using interpolation.",
        "#9b59b6",
        "page-scroll",
        "https://github.com/Pandan/000-grid/tree/dev/src/app/labs/page-scroll"
      ),
      new GridItem(
        "Planetarium",
        "Always wanted to try doing The Solar System.",
        "#3498db",
        "planetarium"
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

  }

}
