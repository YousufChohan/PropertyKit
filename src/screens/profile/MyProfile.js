import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  activenavbar_icon1,
  containerFull,
  navbar_icon1,
} from "../../commoncss/PageCSS";
import { formHead } from "../../commoncss/FormCSS";
import Bottomnavbar from "../../components/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar";
import PropertyPost from "../../components/PropertyPost";
import { color } from "../../commoncss/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfileCard from "../../cards/ProfileCard";
import ProfileCard2 from "../../cards/ProfileCard2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import nopic from "../../../assets/nopic.png";

const MyProfile = ({ navigation }) => {
  const datta = {
    agentName: "usufchohan",
    agentEmail: "yousuf-chohan@hotmail.com",
    agentPhone: "03312140590",
    agentBio: "I am a Software Developer from Gazdarabad",
    agencyName: "BN Properties",
    agentCity: "Karachi",
    profileImage: "https://picsum.photos/300/300",
    properties: [
      {
        id: 1,
        agentname: "usufchohan",
        propertyPrecinct: "10A",
        propertyNum: 345,
        propertyStreet: "6B",
        propertyPrice: 18720000,
        propertyType: "Villa",
        propertyDetail:
          "It is a corner visadfasd asdgag asdgag asdgadfg asdgag dfazing view from above the mountain into the kati pahari",
        propertyImage: "https://picsum.photos/200/320",
        profile_image: "https://picsum.photos/200/300",
        interested: ["malikriaz", "sufyanmallick"],
        comments: [
          {
            id: 1,
            username: "sufyanmallick",
            comment: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            comment: "we is the bn",
          },
        ],
      },
      {
        id: 52,
        agentname: "usufchohan",
        propertyPrecinct: "10A",
        propertyNum: 345,
        propertyStreet: "6B",
        propertyPrice: 18720000,
        propertyType: "Villa",
        propertyDetail:
          "It is a corner visadfasd asdgag asdgag asdgadfg asdgag dfazing view from above the mountain into the kati pahari",
        propertyImage: "https://picsum.photos/300/500",
        profile_image: "https://picsum.photos/200/300",
        interested: ["malikriaz", "sufyanmallick"],
        comments: [
          {
            id: 1,
            username: "sufyanmallick",
            comment: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            comment: "we is the bn",
          },
        ],
      },
      {
        id: 3,
        agentname: "usufchohan",
        propertyPrecinct: "10A",
        propertyNum: 345,
        propertyStreet: "6B",
        propertyPrice: 18720000,
        propertyType: "Villa",
        propertyDetail:
          "It is a corner visadfasd asdgag asdgag asdgadfg asdgag dfazing view from above the mountain into the kati pahari",
        propertyImage: "https://picsum.photos/500/500",
        profile_image: "https://picsum.photos/200/300",
        interested: ["malikriaz", "sufyanmallick"],
        comments: [
          {
            id: 1,
            username: "sufyanmallick",
            comment: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            comment: "we is the bn",
          },
        ],
      },
      {
        id: 4,
        agentname: "usufchohan",
        propertyPrecinct: "10A",
        propertyNum: 345,
        propertyStreet: "6B",
        propertyPrice: 18720000,
        propertyType: "Villa",
        propertyDetail:
          "It is a corner visadfasd asdgag asdgag asdgadfg asdgag dfazing view from above the mountain into the kati pahari",
        propertyImage: "https://picsum.photos/500/500",
        profile_image: "https://picsum.photos/200/300",
        interested: ["malikriaz", "sufyanmallick"],
        comments: [
          {
            id: 1,
            username: "sufyanmallick",
            comment: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            comment: "we is the bn",
          },
        ],
      },
      {
        id: 5,
        agentname: "usufchohan",
        propertyPrecinct: "10A",
        propertyNum: 345,
        propertyStreet: "6B",
        propertyPrice: 18720000,
        propertyType: "Villa",
        propertyDetail:
          "It is a corner visadfasd asdgag asdgag asdgadfg asdgag dfazing view from above the mountain into the kati pahari",
        propertyImage: "https://picsum.photos/400/400",
        profile_image: "https://picsum.photos/200/300",
        interested: ["malikriaz", "sufyanmallick"],
        comments: [
          {
            id: 1,
            username: "sufyanmallick",
            comment: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            comment: "we is the bn",
          },
        ],
      },
      {
        id: 7,
        agentname: "usufchohan",
        propertyPrecinct: "10A",
        propertyNum: 345,
        propertyStreet: "6B",
        propertyPrice: 18720000,
        propertyType: "Villa",
        propertyDetail:
          "It is a corner visadfasd asdgag asdgag asdgadfg asdgag dfazing view from above the mountain into the kati pahari",
        propertyImage: "https://picsum.photos/300/300",
        profile_image: "https://picsum.photos/300/300",
        interested: ["malikriaz", "sufyanmallick"],
        comments: [
          {
            id: 1,
            username: "sufyanmallick",
            comment: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            comment: "we is the bn",
          },
        ],
      },
    ],
    requirements: [
      {
        id: 1,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,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",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
      {
        id: 2,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,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",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
      {
        id: 3,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,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",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
      {
        id: 4,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,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",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
      {
        id: 5,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,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",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
      {
        id: 6,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVERUYGRgYGBgSGBgYGBgYGBkYGBgZGRgYGBgcIS4lHB4rIRgYJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQrIyQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA/EAACAQIEAwYCBwcDBAMAAAABAgADEQQSITEFQVEGImFxgZEToTJCUrHB0fAHI2JykuHxFIKiJLLC0hYzc//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACURAQEBAAEEAgEEAwAAAAAAAAABAhEDEiExQVFhEyIyQgQUsf/aAAwDAQACEQMRAD8A5USaiRUS1RPnvWmiy5FkEWE00mbVWU0hlJJXSSHUac52qlSpw2lTjUacOpU5zoalShSUpOnThSU5iqqSlLBTl6pLBTk4TkL8OMacNyRjTl4OWe1OUPSmmySl6ccHLIqUoJVpTZqU4HVpzUGLVpwKrTm1WpwCtTm5RkVEgrpNOqkDqJOkATrKWEKdZQ6zURTaKTtFNIZRL1ErQS9BM1VlNYZSSU01htFJm1V1FIfQpyqgk0KCTnRbRSHUqcropDqaTFEqdOEIkSJL0SOBFUloSZfFu0GGw/dqMS9rhEGZ9dr8l9SJz1ftdin/APooKi9XJZj6CwHznXPR1rzwjtskYpOPTj/ELfQoH0f/ANoVhe1VRTbF4cov20u6jTdlFyB5XlvRsPLomSVOkswuMo1lzUXRx/CwPuNx6ybpOdzx7OQFSnBKtOajpBaiScDHrU4BWpzaqpAK6SxWLWpwGqk2K6TPrJNwZdRYM4mhVWCOs6RA1opZlilDIIRTWUoIVSWSgikkPoJBqKzQoJOdUVQSaFBIPQSaFFJii+kkMppK6SQpFhFeKxVOijVKrhEXUk/cBzPgJwmN7WYjEsy4a9KkDbMNHb/cNvJfUzC7T8VfG4kpTY/CRiiWPdyqbM46ljex6WE08HTVECqLAaT2Z6UzOb7/AOGZ3UsPhQuupYm5Y6sT1JM0KaEylPGaeHpX5Rba9GcSFQpGFpTMsSl1k/hk7SVqZgDE8Ipuc63puDcOmhv1PXbn6WkcJ2gr4Z1pY0BqZOVawvfXYtf563HjNlKBtKcbg0qIUqC4PPodwR6x4viue+nPht3BAKkEEXBGoIOxB5iU1EnN9lcU9Go2DqnQd6kb38SvkdSPI9bzqXWcN47bw4M6qkBrJNWosCrJMKx66TNrpNqukzq6TUGPWSBVFmnWSBVVm4A7RSy0U0I0xC6SyimIXRWZoLoLNGgkEw6zRoLMUGUEmhRWDUFh9JZkX01mb2wxpo4Ks6khivw1I0ILkJceQJmvTWc9+0Uf9C5I2emfLv7zp0s86kv2zq+HnHZ+lbM1rfVA6ATepGYvBzYAfra/4zZpH8p7N+2+n6aGHGs3cMoAvMCiZs4e5Fpyd5WjYGTW0ggsLSJcC5JtbxhoZTPjFVFxpAG4jTXQt4fhKf8A5BhlIBcAHTy5XPhHbal1AHaOmUKV0HeQg32PdOYa+nlOtw1cVERxs6h7dLi9pjcXpK9M6jUWGosbjTWaHAKRXDop5ZgN9sx6zO5zmX6ebf8AJfUWBVlmjUEDqrOHCRl10mdXWa9dZnYhYisiuszqyzWrrM+ss1ADliluWKaFVIQ+gsDpCH0BM0G0Fmnh1gFBZp0FmaDaKw6ksForDqQkSr0Eye2eDNXA1lB1Cip5hGDMPYGbKCLF4fPTdPto9P8AqUj8ZvF4srNeJcPbWw5/Lb9es0sTi1pi5PgPPX8uUzMPUyPZxZgSCOhFxY9NdJZxHFCoi0yiDK+YsL3a62UG+1u9tp3jPdZzfK5tmfAmlx5BydjzsFRfRjmJ9VEKwnaLllcedRT91MTDw9Wmn1M5HID85bUxJcXWmqDa25PjL2z6O7XzXW8K4m7tlDMx6EBToCWsLkWGVje+2pAluNw9SqcocBbXZlIbLt9VTqfYajWc3wuwaxF8wtqNBZ1Y/JSPWd0tINSOTSwsbb2sRceIBJ8Zx1eL4d8y2OMXBOpshRD4gO3mXcaH+UKJoYXhFYjvV6h1vlzsBfra+m8zsTw0sTmBuTpa+n5ze4Xwq6IFAQoLFluC/IZ+R87X8Zbrxzyx2+fSzAYl6edKpsmXMpP1SDfUgba6ztMAlkA03bY3G5A15zPwmHWxzC5AI1uRtvrBqld6FAsuWybIAUULn121J312mNfuydlt4jccQWqIUrZlBHMA+4lFQTz1zZ9ZZm11mrWEArrCsfELM6us18Qsza6yxQFopbaKUUURNCgIDRE0cOJKD8OJpUBAMOJp0BM0GURDqYglEQymJEohBOZ7ecVrUEpCgxVnc3INjZQOfrOmpzne32EL4dXG9N8x/lYFT8ys6445nKZ9vOqtBA6vrmZmzAm9mJuTruTr7y6rhgw00NwfaLFqSQdgLH8vvPtLMO5v5Gem28Okz5U08ApPQ+Onz5y5+Hr9oeJvpz2J32OnhNNAp3tJPTRAWIHX+0x3VuYjOpoqDobi19/MzsuAVDltOAxOPVBnY/WA+e1v1tOz7O8SpuqnoCSR8oubw3LPTUxeAubqoK7i2jL4DkR90sw6VBoEAvuTy9Bv7zPp8XDqrUg173KujIxXckBgPD3E28FWVxmHOc+1b6SSgVFybk7k25zNxVUMtagw1ZHcHfSxIPlmv7TYYX0mctAtWuQLFRTG9zmYs9z0yjTxJ6yzwxz81qYWkVRFO6oqn0AEg4hTwdxOVea3m8gqomfXE0qogFcSNMrELM2uJrYgTMxAligbRSy0UoGoiaGHEAozRoSUaOHE0qAmfhxNKgJAdRELpwWlC6cM0QklVoq6Mji6sCpHgdJFJcssR49xPCtSqNRY60zkP8S7o48wfnBqb7+E679oeEAenVAtdchPUq2nyb5TjKmhv1nqze6Omb8tXD1hHxmKFgLiw/VplJUtsZj4zHuxKDa5Euc81vW+2DsWwzXBte506CxueUngsatN9DYWuSN7m23uZn4WmG+kSTpou/qfYzosBwylcM1G9tr3ty3BM6XiTis5zrXmCsHxcLd2csSQAzEki2pDfq34dRwXHKxuCBnv3dtb62F/eYOM4XTsLIwv9i9x0uvON2d4dUSoNSovqDodbAjL+d5yszW73T273N90bBr3xpyP3f3lIbeaGEw2W7Em7AaHYaDQTjb4Z3eIteDvCHlDzm4g6ogNcTQqiA1xIrNriZmIE1K8zcQJY0BikrRTQFoTRw8z6E0cPJRpYeaVCZ2HmjQmUHUoZTglKF04QQkuEpSXCVAnE+FUcQFWumYK2cC5XW1uR28PCeNY3KjuitmVHZA3UKxAPqBPQO2PbmlhQ1KiQ9exFge5TJG7nm3PKPW08g4dijqja21v4X1v7/OerpY1281M688NtHAN/GNisMha+UddhBS5G36EvSvcXm+LHXmX2nhhlYAIPTQetptpj2XRUU21sz2vttp4QLCWtrvqJtcKo0wdhrrc66zN0655g/A8UZxYoFPhqfSHBdVYcvnrLUwtOwYWG2o5/oRqpCmwnO1eGnghna3L6R8hy+6bJmVwD65/l/8AKapnPTz7v7uFTyh5e8oeZZC1YDWh1WBVpFZuImbXmliJm15YoO0UUUqhKM0aEzqMPpOALsQAOZNh7yUauHmlQnJ1u0+Ep/XLnogzfPb5wCv+0Ai/wqHkXf8A8VH4zeejvXqMXUj0qjI4ziuHoC9esieDMAx8l3PoJ4vxDtVja1w1ZlU/Vp9xflqfUmYrEkknUnUk6k+Z5ztn/Fv9qxd/T1ziX7TcIlxh0eq3In92nubt/wAZyPFP2jY+qGVGSkrC37tTnA8HYk38RaciRITvno5z8MXVTvGWoVYOtrg3FxcdCCOYIuCOhjCMZ2HTPhQ9JcRRuaZvnG7UmH0lbmVHXpYncGC5G3Es7G8VFCtkc/u6pCtfZX2V/Acj4G/KdRxPsyyEvhx3dym1v5DyHgf7TlvPzG87+K5uhiGG9/TebXD8W+gAJ53tMx6BBsQQRuCLEeYnQ8JQHKenKcN3j4enM/LTw1eo1u6QPn7cpo0qJJu0Iw9EEaTR4dgczajujVvy9fuvOU51eI3qzM5qvidJ6WBqVaZyuoXEA/w02DgHwKg3H8REFwPbfAVAM1UU2IBKuCoB5jPbKfedNxlL4estr3pVBbbdCLX5T50OonqvRmpJ9PF3W82voJaiuAyMGU7FSCD5ESp54bwvi2IwzXoVGTmVBuh/mQ6H2nccJ/aAjd3FpkP20BKnzTcel559dDU9eWpqOwqQKtB07R4N/o10/wBxKf8AdaWNWRxdGVh1Ugj3E43NnuNSgsRM2vNGuZnV5GgcUV4pVcjiu0BGlFf97fgv5zJxOMqVNXct5nQeQGggimTn0c4zn1HmurUoo4EVp0QwEkBHAiEBFZUg3l4lKOBcMbawERGAlmdTsR7xrQGAnrPYjinxqAVzd6dqbXNyV+ox5nTS/UGeTzc7LcXOGrq5vkPccDW6HfTmRoR5QlnL2GrwejWHfUefMeRmTjuAU8MMy1LknuoR3j11BFh42mrjOKUsPSatUbuAC2U3zlvoKnUty8LnYTga/HqlV89TRjsATlA1soB+qJvPSm759M/q6zPDscAWUHM1xa4y2zMdO6b6Lr9bXynScA4klRSgQ06i2L0zcnXZlYgZ1P2hOMwGKDqrX6A7W6aXI56Q81XTK1MgMrhtrgj66nkAQbfdtLr/AB85luWf19bvGnY8Ya1Cr/8Am/8A2mfOj08rFTyNvafQuKrLVw7suzIfMG2oPkdJ4JxxMtdh1yn/AIgfhOUdYEIkLSwyLCVTqZZQruhzIzKeqkg/KVCSkG3hu0tddHtUHjo39Q/ETSpcZpPpfI3RvwO05MRETlro518cLNWOxinJfEP2z7mKcv8AWv23+p+HPCW09dIMpMtRp6o5Ll6dNJMCJ+R6/eP18o4lQzGMIxMQgPeM63jRMekKpSlc2hJTpFQtbT185awgUER0axkmWVGB6d2MxXx6HwarBlpj4YQgd1WuVbxtqo6BAIJxHs86KWp65SysvSxuCvhYjSc52S4n8GupJ7rfu36ZWO/obHyvPVHXU6fSXN6rZT+Hzmsaua56jiOCYpkDA3CqCSddABuba8h/T5zseH4qnWygEgMQlyrAFiSo1I+1YfoznaLomKqrtmW2mmrIL+tr67+Imr2dOQ7EWbe+l9x7aT1X92XD1p1CXoqyP9BwVB5ByLDyvoPaePdq0tVVvtXX1XLc/wDIe09k4svxKOZdmFyOnUff7TyXtomiud/iZf6kufcpeeN6ssMbSNxfWPTOkZxDRyLbR1lamWJCJWjSdo1oEYpO0UDnskkqx0cRwOkAhRdbevtIgx6V7yu1rjppAe8cSCyV4DmKKOIEDcG49R1hKsCLiUsJBXym/I7/AJwCGWUuITvrKXEBqD2M9Z7McR+NhkLG702+G/Ugiyt46Ea9QZ5FOo7IcU+FVAY9x7U39+63oT7Ewl9NXiqn/UO19Q5F/AaAbeAE6bglUnKD7++1v7XvMDHp/wBQ5tu2a9jfUXuOZ3IsDrrN3hbWA1/x6i9vKe3+keW+3T0qlldDsblfPn7725es8x7aU+4xts6ny1y3/wCVvWeh1Gvr5DqenLb239ZxHbSnmoub7ZSfNXXSeXefPLv09fDjMOdI7SGEOkteYdVayaSIj3hF4jWjU2liqSbAXPQamArRSz/TVPsN/S0eOKnMcsVk6bRXEdQIVekhV+kfGx+VvwjqZGvuPEW9j/eAwivIgxxAsiEheSECdoxWOI8CFJ8hsfonbw/tLmErZbyKPl0bbkengYCYS2g9pFxIrA7bh2K+KQ5N2sqte1jYAXNzr9EXv7idNw8kAX8dbEctTr+t+s894Ji8ji/0TZT7+M9AwLX1F/Hp4baW336jwnq6eucvNucablN7jU28dLbW2GvTT+04XtDiAVxSNp+7aooPVV12/wBh9J2IqWG+2mhW2lrWJH6t6TzftPXOdyCfost7m9ipVhe/MEyazzmpi/uY+DOkueU4PaXPPM9SNpTUa0vlGIGkC3hVGpVchRooux89h8j7T1Psxw1XRGJsjJqALDMCRYHpoTOD7H4d2pv8MXd3yp4aWJ8ALXnqOIq/6WjTpUtah0B5KT3ndtfEafxAbXt6cztzOPdeXeu7V59QYcDhBoTTuNDci9+d+9FAk4VcAm5JAJJOpPO8Ucfljn8PAMgiyywGITzPagLx6x+j6/hLAJTXO3rCGBkgZXeSUwqwSQMrBkhAsBklMgJJYE4xW+hijrAoDlDZtuR6ectIkqiAiCo5Q2bb7oBtB7T0Hs3jviU7G7Ml1brlI0N99RceYnnS+E1uB8R+FUDH6J7r/wAp5+hAPoRzm+nrt057z3R6Nia1lPkf0f105zz7jrXzG45nr+unpztp2OPraaa+O+/z/wATjOMNodeR0v4GerXjLz4/kCwn0RLWleH0USy08T2FKa9JmyoguzsEUdSxsJfLMPVZHV1tmQlluLi5VlvvyzXHiBE9+Ur0nszgKODRaZcPUVbvlGgO7a8h5+sv4hxiilVWrlc5ACoWACLYNmZuQN+mttr3E88q8YxDafFYC2WyWQW6WS1/W8BAnW9SfEcZ0ufddbif2h4wOwpopQMQpynVb93n0tGnKWimO+unZn6YYtJCRJAkC/QTLSxmg9RrmWW6wdmuTCpAyQMgDHBgWqY4lYMmDAsBkhKxJrAtEcSKyUCwSqsgMmDJGABTcobHb7vKFo/MGV1UvBlYodNuYgdpwrHl6YQ/SQZR/Ly21029BM7jD906/Z0vsCR6/r0GXhMWEYONRsw/hO/rz9BDuN1bhACDc30JNwBfnqB3hb/M9E3zi/hw7ONxXT2l0FpnaEAzzu6QjNy9vf8AxEIjAcGTWVgyd5As8UjFAxAokrSV5WzyohXewgyRVnubRxIqUlICPAkJMGViSBlFgMsUyoGTUwLVMnKQZNWgWiPIgxwYDPBqohLCD1YA2o2hlB2cKDeyDKNfEkeXIeQEDaauFp5VHjqYFqCWiRj3gTEV4wMe8gQlkrvETAlnXrFMxyxJObmTyjwqoyipFFKyCWWiKKRSEeKKBIRxFFKLFjiKKBISQiigWpJCKKAjKKsUUKFG82hyiihKdZIRRQJiKKKQOJF48UKDiiilR//Z",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
      {
        id: 7,
        agentname: "usufchohan",
        reqPrecinct: "12S",
        reqNum: 3452,
        reqStreet: "6B",
        reqBudget: "between 24234234 and 33463456",
        reqType: "flat",
        reqSpecs: "we need a good flat that has a west side open",
        profileImage:
          "data:image/jpeg;base64,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",
        noted: ["ishtiaq", "sufyanmallick"],
        offers: [
          {
            id: 1,
            username: "sufyanmallick",
            offer: "bn is the we",
          },
          {
            id: 2,
            username: "malikriaz",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow",
          },
          {
            id: 3,
            username: "ishtia",
            offer:
              "we is the bn and bn is the usuf and we have to keep a long comment to check the overflow and it is very important",
          },
        ],
      },
    ],
  };
  const [showDetail, SetShowDetail] = useState(true);
  const [showProperty, SetShowProperty] = useState(true);
  const [userdata, setUserdata] = React.useState(null);

  const loaddata = async () => {
    AsyncStorage.getItem("user")
      .then(async (value) => {
        // console.log("async userdata ", data);
        fetch("http://10.0.2.2:3000/userdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + JSON.parse(value).token,
          },
          body: JSON.stringify({ email: JSON.parse(value).user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.message == "User Found!!") {
              // alert("Hello");
              setUserdata(data.user);
            } else {
              alert("Login Again");
              navigation.navigate("Login");
            }
          })
          .catch((err) => {
            navigation.navigate("Login");
          });
      })
      .catch((err) => {
        navigation.navigate("Login");
      });
  };
  useEffect(() => {
    loaddata();
  }, []);

  // console.log("userdata ", userdata);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Topnavbar navigation={navigation} page2={"MainPage"} />
      <Bottomnavbar navigation={navigation} page={"MyProfile"} />
      {userdata ? (
        <ScrollView>
          <View style={styles.c1}>
            {userdata.profilepic ? (
              <Image
                style={styles.profilepic}
                source={{ uri: userdata.profilepic }}
              />
            ) : (
              <Image style={styles.profilepic} source={nopic} />
            )}
            <View style={styles.c11}>
              <View style={styles.c111}>
                <Ionicons
                  name="person-circle"
                  style={styles.icon}
                  size={24}
                  color="black"
                />
                <Text style={styles.txt}>{userdata.username}</Text>
              </View>
              <View style={styles.c111}>
                <Fontisto
                  name="persons"
                  style={styles.icon}
                  size={24}
                  color="black"
                />
                <Text style={styles.txt}>{userdata.agency}</Text>
              </View>
              <View style={styles.c111}>
                <Ionicons
                  name="call"
                  style={styles.icon}
                  size={24}
                  color="black"
                />
                <Text style={styles.txt}>{userdata.mobile}</Text>
              </View>
            </View>
          </View>
          {showDetail ? (
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "center" }}
              onPress={() => {
                SetShowDetail(false);
              }}
            >
              <Text style={styles.txt}>Show Detail</Text>
              <Feather name="arrow-down" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <View>
              <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: "center" }}
                onPress={() => {
                  SetShowDetail(true);
                }}
              >
                <Text style={styles.txt}>Show Less</Text>
                <Feather name="arrow-up" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.txt}>
                E-Mail: <Text style={styles.txt}>{userdata.email}</Text>
              </Text>
              <Text style={styles.txt}>City: {userdata.city}</Text>
              {datta.agentBio.length > 0 && (
                <Text style={styles.txt}>About: {userdata.description}</Text>
              )}
            </View>
          )}
          <View style={styles.hr1}></View>
          <View style={styles.deals}>
            <View style={styles.dealsbuttons}>
              <TouchableOpacity
                style={styles.c2a}
                onPress={() => SetShowProperty(true)}
              >
                {showProperty ? (
                  <Ionicons name="business" style={activenavbar_icon1} />
                ) : (
                  <Ionicons name="business" style={navbar_icon1} />
                )}
                <Text style={{ fontSize: 15 }}>My Property</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.c2b}
                onPress={() => navigation.navigate("Settings1")}
              >
                <Ionicons
                  name="settings"
                  style={navbar_icon1}
                  // onPress={() => navigation.navigate("SearchPage")}
                />
                <Text style={{ fontSize: 15 }}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.c2a}
                // onPress={() => SetShowProperty(false)}
              >
                {showProperty ? (
                  <MaterialCommunityIcons
                    name="format-list-checks"
                    style={navbar_icon1}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="format-list-checks"
                    style={activenavbar_icon1}
                  />
                )}

                <Text style={{ fontSize: 15 }}>My Demand</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hr1}></View>
            {showProperty ? (
              <View style={styles.c13}>
                {userdata.posts?.reverse().map((item) => {
                  return (
                    <ProfileCard
                      key={item.post}
                      propertyNum={item.propertynum}
                      propertyImage={item.post}
                      propertyType={item.propertytype}
                      propertyStreet={item.propertystreet}
                      propertyPrecinct={item.propertyprecinct}
                    />
                  );
                })}
                {/* {datta.properties.map((item) => {
                  return (
                    <ProfileCard
                      key={item.id}
                      agentname={item.agentname}
                      propertyPrecinct={item.propertyPrecinct}
                      propertyNum={item.propertyNum}
                      propertyStreet={item.propertyStreet}
                      propertyPrice={item.propertyPrice}
                      propertyType={item.propertyType}
                      propertyDetail={item.propertyDetail}
                      propertyImage={item.propertyImage}
                      profileImage={item.profileImage}
                      interested={item.interested}
                      comments={item.comments}
                    />
                  );
                })} */}
              </View>
            ) : (
              <View style={styles.c13}>
                {datta.requirements.map((item) => {
                  return (
                    <ProfileCard2
                      key={item.id}
                      agentname={item.agentname}
                      reqPrecinct={item.reqPrecinct}
                      reqNum={item.reqNum}
                      reqStreet={item.reqStreet}
                      reqType={item.reqType}
                      reqBudget={item.reqBudget}
                      reqSpecs={item.reqSpecs}
                      profileImage={item.profileImage}
                      noted={item.noted}
                      offers={item.offers}
                    />
                  );
                })}
              </View>
            )}
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="black" style={styles.c1loader} />
      )}
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: color.secondarycolor,
    paddingVertical: 50,
  },
  c1: {
    flexDirection: "row",
    width: "60%",
    marginTop: 35,
    marginBottom: 10,

    // alignItems: "center",
  },
  c1loader: {
    marginTop: 40,
  },
  profilepic: {
    width: 90,
    height: 90,
    borderRadius: 75,
    marginHorizontal: 10,
  },
  email: {
    fontSize: 18,
  },
  dealsbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  icon: {
    size: 24,
    color: color.primarycolor,
    marginRight: 5,
  },
  txt: {
    color: color.primarycolor,
    fontSize: 20,
    fontWeight: "bold",
    // margin: 10,
    // backgroundColor: color.primarycolor,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 20,
  },
  txt1: {
    color: color.black,
    fontSize: 20,
    fontWeight: "bold",
    // borderTopWidth: 2,
    // justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    borderRadius: 20,
  },
  txt2: {
    color: color.black,
    fontSize: 20,
  },
  c11: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  c111: {
    flexDirection: "row",
    marginVertical: 2,
  },
  hr1: {
    width: "100%",
    height: 1,
    marginVertical: 5,
    backgroundColor: color.primarycolor,
  },
  description: {
    color: color.black,
    fontSize: 15,
    // marginVertical: 10,
    // backgroundColor: color.secondarycolor,
    // width: "100%",
    // padding: 10,
    // paddingVertical: 20,
  },
  postpic: {
    width: "30%",
    height: 120,
    margin: 5,
  },
  c13: {
    backgroundColor: color.primarycolor,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    justifyContent: "center",
  },
  c2: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  c2a: {
    width: "37%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    // alignSelf: "center",
    borderRadius: 20,
    // borderColor: color.black,
    borderWidth: 1,
  },
  c2b: {
    width: "20%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: color.primarycolor,
    // alignSelf: "center",
    borderRadius: 20,
    borderColor: color.primarycolor,
    // borderColor: color.black,
    borderWidth: 3,
  },
  refresh: {
    position: "absolute",
    top: 50,
    right: 5,
    zIndex: 1,
  },
});
