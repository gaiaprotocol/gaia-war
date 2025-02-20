import { Coordinates, GameNode, GameObject } from "@gaiaengine/2d";
import GaiaWarConfig from "../../config/GaiaWarConfig.js";

export default abstract class TileObject extends GameObject {
  constructor(coord: Coordinates, ...gameNodes: (GameNode | undefined)[]) {
    super(0, 0, ...gameNodes);
    this.setTilePosition(coord).enableYBasedDrawingOrder();
  }

  public setTilePosition(coord: Coordinates): this {
    return super.setPosition(
      coord.x * GaiaWarConfig.tileSize,
      coord.y * GaiaWarConfig.tileSize,
    );
  }
}
