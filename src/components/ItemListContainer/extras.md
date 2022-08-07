/*       const db = getFirestore();
      const docRef = doc(db, "items", "${id}")
      getDoc(docRef).then((snapshot) => {
        const data = {id: snapshot.id, ...snapshot.data()};
      }) */


/*     const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map( doc => ({id: doc.id, ...doc.data()}))
      console.log(data)
    })
 */

/*     const db = getFirestore();
    const itemCollection = collection(db, "items");
    const filteredCollection = query(itemCollection, where("nombre", "==", "Ropita 1"))

    getDocs(filteredCollection).then((snapshot)=> {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data()
      }));
    })
 */


/*      promise.then((respuesta) => {
      const products = respuesta;
      if (categoria) {
        setItems(products.filter(producto => producto.categoria == categoria));
      }else{
        setItems(products);
      }
      setLoading(false)
    });
  }, [categoria]); */


      useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const itemsDocuments = getDocs(itemsCollection).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data}))
      })
    
    });
