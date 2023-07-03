const { color } = require("./color");

module.exports = {
  containerFull: {
    width: "100%",
    height: "100%",
    backgroundColor: color.secondarycolor2,
    alignItems: "center",
    justifyConctent: "center",
  },
  containerFulll: {
    width: "100%",
    height: "100%",
    // backgroundColor: color.white,

    alignItems: "center",
    justifyConctent: "center",
  },
  logo1: {
    height: "15%",
    resizeMode: "contain",
    marginTop: 150,
    marginBottom: 20,
  },
  bgg: {
    position: "absolute",
    height: "2%",
    resizeMode: "contain",
    // marginTop: 150,
    // marginBottom: 20,
    // zIndex: -1,
  },
  hr80: {
    width: "80%",
    height: 1,
    backgroundColor: color.black,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  goback: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    top: 50,
    left: 20,
  },
  icon1: {
    color: color.black,
    fontSize: 30,
  },
  bellicon: {
    color: color.black,
    fontSize: 30,
    marginLeft: 12,
  },
  navbar_icon1: {
    color: color.black,
    fontSize: 35,
  },
  activenavbar_icon1: {
    //backgroundColor: "#ffffff",
    borderRadius: 50,
    fontSize: 35,
    color: color.secondarycolor,
    //padding: 10,
  },
  icon2: {
    //position: "absolute",
    zIndex: 101,
    color: color.black, //dark green
    fontSize: 30,
  },
  logo2: {
    // width: 200,
    // position: "absolute",
    zIndex: 10,
    // top: 40,
    // left: 140,
    height: 54,
    resizeMode: "contain",
    // backgroundColor: 'white',
    width: 100,
  },
  searchbar: {
    width: "95%",
    backgroundColor: color.secondarycolor,
    borderWidth: 2,
    //borderColor: color.primarycolor,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
    alignSelf: "center",
  },
};
