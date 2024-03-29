import { useEffect, useState } from "react";

const useLoadingResources = (service, limit, initialOffset, setProcess) => {
    const [resources, setResources] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(null);
    const [offset, setOffset] = useState(initialOffset);
    const [ended, setEnded] = useState(false);

    useEffect(() => {
        service().then(handleResourcesLoaded).then(() => setProcess('confirmed'));
    }, []);
    
    const handleResourcesLoaded = (resources) => {
        setResources(resources);
    };

    const handleLoadMore = () => {
        setNewItemsLoading(true);
        service(limit, offset).then(handleLoadNewItems).then(() => setProcess('confirmed'));
    };
    
      const handleLoadNewItems = (newItems = []) => {
        const ended = newItems.length < limit ? true : false;
        setEnded(ended);
        setOffset((offset) => offset + limit);
        setResources([...resources, ...newItems]);
        setNewItemsLoading(false);
      };

    return {resources, newItemsLoading, ended, handleLoadMore};
}

export default useLoadingResources;