import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 50,
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
});

export default styles;

{/*

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    color: COLORS.primary,
    margin: 2,
  },
  headerContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 0,
    width: '100%',
    height: 140,
    backgroundColor: COLORS.tertiary
  },
  profilePhoto: {
    marginTop: 75,
    width: 100,
    height: 100,
    borderRadius: 50,
    ...SHADOWS.medium, // fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  },
  statsContainer: {
    flexDirection: 'column',
    height: 200,
    marginTop: 90,
    marginBottom: 20
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: SIZES.medium + 2,
  },
  statLabel: {
    fontSize: FONT.small,
    color: '#787878',
  },
button: {
    backgroundColor: '#0066cc',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 110,
    color: COLORS.secondary,
    alignContent: "center"
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    textAlign: 'center'
  }
});


*/}