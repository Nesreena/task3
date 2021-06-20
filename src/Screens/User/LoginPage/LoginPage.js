// import {
//   InnerSection,
//   FlexBox,
//   FlexRow,
//   FlexColumn,
//   Typography,
// } from "../../../App.Styles";
// import { Form, Formik } from "formik";
// // import { ErrorSharp, TouchAppRounded } from "@material-ui/icons";
// // import { ErrorMessage, Input } from "";
// // import { loginSchema } from "../../../Valedation";
// import { LoginImg, FormBox  ,ErrorMessage, Input } from "./LoginPage.Styles"
// import LoginImg from "../../../Assets/login.png";

// export default function LoginPage() {
//   const handleSaveChanges = (values) => {
//     console.log(values);
//   };

//   return (
//     <FlexBox>
//       <InnerSection>
//         <FlexRow>
//           <FlexColumn>
//             <FlexColumn style={{ width: "474px", height: "200px" }}>
//               <Typography fontSize={60} fontWeight={"bold"}>
//                 Login.
//               </Typography>
//               <Typography fontSize={32}>
//                 Login with your data that you entered during registration
//               </Typography>
//             </FlexColumn>

//             <FlexColumn>
//               <Formik
//                 initialValues={{ email: "", password: "", }}
//                 validationSchema={loginSchema()}
//                 onSubmit={handleSaveChanges}
//               >
//                  {({errors , touched }) => {
//                      return(

             
//                 <Input
//                   name={"email"}
//                   type={"email"}
//                   placeholder={"email"}
//                 />

      

//                 // {errors.password && touched.password ? (
//                 //   <ErrorMessage>{errors.password}</ErrorMessage>
//                 // ) : null}

//                      );
//                 }}
//               </Formik>
//             </FlexColumn>
//           </FlexColumn>
//           <LoginImg src={LoginImg }  />
//         </FlexRow>
//       </InnerSection>
//     </FlexBox>
//   );
// }
