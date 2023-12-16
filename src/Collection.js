import { useState, useEffect } from "react";

import {
	collection,
	addDoc,
	getDocs,
	deleteDoc,
	updateDoc,
	doc,
} from "firebase/firestore";

import { app } from "./firebase";

const Collection = () => {
	const [items, setItems] = useState([]);

	const [newItem, setNewItem] = useState("");

	useEffect(() => {
		app();
		// fetchData();
	}, []);

	const fetchData = async () => {
		// const c = collection(db, "items");
		// console.log("db: ", db, "c: ", c);
		// const snapshot = await getDocs(collection(db, "items"));
		// console.log("snapshot: ", snapshot);
		// const data = snapshot.docs.map((doc) => ({
		// 	id: doc.id,
		// 	...doc.data(),
		// }));
		// setItems(data);
		// const c = collection(db, "items");
		// const snapshot = await getDocs(c);
		// const list = snapshot.map((doc) => doc.data());
		// //return cityList;
		// setItems(list);
	};

	const addItem = async () => {
		// if (newItem.trim() !== "") {
		// 	try {
		// 		await addDoc(collection(db, "items"), {
		// 			name: newItem,
		// 		});
		// 		setNewItem("");
		// 		fetchData();
		// 	} catch (error) {
		// 		console.error("Error adding document: ", error);
		// 	}
		// }
	};

	const deleteItem = async (id) => {
		// try {
		// 	await deleteDoc(doc(db, "items", id));
		// 	fetchData();
		// } catch (error) {
		// 	console.error("Error deleting document: ", error);
		// }
	};

	const updateItem = async (id, name) => {
		// try {
		// 	await updateDoc(doc(db, "items", id), {
		// 		name,
		// 	});
		// 	fetchData();
		// } catch (error) {
		// 	console.error("Error updating document: ", error);
		// }
	};

	return (
		<div>
			<h1>My Collection</h1>

			<input
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>

			<button onClick={addItem}>Add Item</button>

			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name}

						<button onClick={() => deleteItem(item.id)}>
							Delete
						</button>

						<input
							type="text"
							value={item.name}
							onChange={(e) =>
								updateItem(item.id, e.target.value)
							}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Collection;
