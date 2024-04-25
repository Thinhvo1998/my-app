import React, { useEffect, useState } from "react";

export const useAppContext = () => {
   return React.useContext(AppContainerContext);
};

export const AppContainerProvider = ({ children }) => {
   const [dataList, setDataList] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [editInfoData, setEditInfoData] = useState(null);
   const [modal, setModal] = useState(false);

   useEffect(() => {
     if (dataList?.length > 0) {
      localStorage.setItem('dataList', JSON.stringify(dataList));
     }
   }, [dataList])
   useEffect(() => {
     const dataInLocal = localStorage.getItem('dataList');
     if (dataInLocal) {
      setDataList(JSON.parse(dataInLocal));
     }
   }, [])
   
   
   const toggle = () => setModal(!modal);
   const onSubmitData = (data) => {
      console.log("🚀 ~ onSubmitData ~ data:", data)
      setDataList([...dataList, data]);
   };

   const onUpdateData = (data) => {
      const newData = dataList.map((item) => {
         if (item.id === data.id) {
            return data;
         }

         return item;
      });
      setDataList(newData);
      setEditInfoData(null);
   };

   const onEditChange = (editInfo) => {
      setEditInfoData(editInfo);
      setModal(!modal)
   };

   const onDeleteData = (id) => {
      const newData = dataList.filter((item) => item.id!== id);
      setDataList(newData);
   }
   

   const contextValue = {
      dataList,
      setDataList,
      isLoading,
      setIsLoading,
      editInfoData,
      setEditInfoData,
      onDeleteData,
      onSubmitData,
      onUpdateData,
      onEditChange,
      toggle,
      modal,
   };

   return (
      <AppContainerContext.Provider value={contextValue}>
         {children}
      </AppContainerContext.Provider>
   );
};

export const AppContainerContext = React.createContext();