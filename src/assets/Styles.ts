import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    height:"90%",
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  searchContainer: {
    alignContent: 'center',
    gap: 9,
    flexDirection: 'row',
    height: 50,
  },
  searchBar: {
    flex: 1,
    width: 50,
    borderColor: 'gray',
    borderWidth: 2,
  },
  addInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2,
  },
  updateInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2,
  },
  inputContainer: {
    alignContent: 'center',
    gap: 9,
    width: 300,
    height: 150,
  },
  searchBtn: {
    borderRadius: 40
  },
  todoContainer: {
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#CDF0EA",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  touchable: {
    flexDirection: "row",
  },
  todoTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  todoDescription: {
    opacity: 0.6,
  },
  container: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'tomato',
    width: "100%",
    paddingTop: 22,
    padding: "auto",
  },
});