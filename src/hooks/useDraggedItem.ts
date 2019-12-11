import { useSelector } from 'react-redux';
import { AppState } from '../reducers/rootReducer';
import { WaypointId } from '../types';

const useDraggedItem = (): WaypointId => {
    const draggedItemId = useSelector((state: AppState) => state.draggedItemId);
    return draggedItemId;
}

export default useDraggedItem;