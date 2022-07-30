import { useEffect, useState } from "react";

const useLoadingResources = (service, limit, initialOffset) => {
    const [resources, setResources] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(null);
    const [offset, setOffset] = useState(initialOffset);
    const [ended, setEnded] = useState(false);

    useEffect(() => {
        service().then(handleResourcesLoaded);
    }, []);
    
    const handleResourcesLoaded = (resources) => {
        setResources(resources);
    };

    const handleLoadMore = () => {
        setNewItemsLoading(true);
        service(limit, offset).then(handleLoadNewItems);
    };
    
      const handleLoadNewItems = (newItems = []) => {
        const ended = newItems.length < 8 ? true : false;
        setEnded(ended);
        setOffset((offset) => offset + 8);
        setResources([...resources, ...newItems]);
        setNewItemsLoading(false);
      };

    return {resources, newItemsLoading, ended, handleLoadMore};
}

export default useLoadingResources;