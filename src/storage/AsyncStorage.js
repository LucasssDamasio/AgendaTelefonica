import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllContacts = async () => {
  try {
    const contacts = await AsyncStorage.getItem("contatos");
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error(error);
  }
};

export const getContactById = async (id) => {
  try {
    const contacts = await AsyncStorage.getItem("contatos");
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      return parsedContacts.find((contact) => contact.id === id);
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

export const addContact = async (newContact) => {
  try {
    console.log(newContact);
    const contacts = await getAllContacts();
    contacts.push(newContact);
    await AsyncStorage.setItem("contatos", JSON.stringify(contacts));
  } catch (error) {
    console.error(error);
  }
};

export const updateContact = async (updatedContact) => {
  try {
    const contacts = await getAllContacts();
    const index = contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      contacts[index] = updatedContact;
      await AsyncStorage.setItem("contatos", JSON.stringify(contacts));
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeContact = async (id) => {
  try {
    const contacts = await getAllContacts();
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    await AsyncStorage.setItem("contatos", JSON.stringify(filteredContacts));
  } catch (error) {
    console.error(error);
  }
};
