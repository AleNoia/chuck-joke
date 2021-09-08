// ANCHOR Imports

// SECTION Variables
// ANCHOR Colors

// ANCHOR Elements
export const heightNavbar = 72; // Height navbar

// // !SECTION Variables

// ANCHOR Mixins
export const isFlex = ({ important, direction, align, justify }) => `
  display: flex     ${important ? "!important" : ""};
  flex-direction:   ${direction || "row"};
  align-items:      ${align || "center"};
  justify-content:  ${justify || "flex-start"};
`;

// ANCHOR Components
// export const Container = styled.div`
//   width: 100%;
//   max-width: 1440px;
// `;

// export const Main = styled.main`
//   margin-top: ${heightNavbar}px;
//   ${isFlex({ justify: "center" })}
// `;

// export const Section = styled.section`
//   padding: 0 32pt;
// `;

// export const Card = styled.div`
//   background-color: #fff;
//   margin-top: 16pt;
//   border-radius: 13px;
//   padding: 16pt;
//   h1 {
//     margin-top: 8pt;
//   }
// `;

// SECTION Reset

// export default createGlobalStyle`
//   body{
//     background-color: { theme.palette.primary.main }
//   }

//  a {
//    &:visited{
//      color: ${primaryDark}
//    }
//  }
// `;

// !SECTION Reset
