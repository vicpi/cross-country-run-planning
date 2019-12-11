import { useSelector } from 'react-redux';
import { AppState } from '../reducers/rootReducer';

const useIsDragging = (): boolean => {
    const draggedItemId = useSelector((state: AppState) => state.draggedItemId);
    return draggedItemId !== null;
}

export default useIsDragging;