// Geovisto core
import {
    ILayerToolProps,
    IMapTilesModel
} from "geovisto";

/**
 * This type provides the specification of the tiles layer tool props model.
 * 
 * @author Jiri Hynek
 */
type ITilesLayerToolProps = ILayerToolProps & {
    baseMap?: IMapTilesModel;
}
export default ITilesLayerToolProps;