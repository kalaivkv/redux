import{r as t,u as h,j as s,L as j}from"./index-BlF39Glr.js";import{a as g,b as N,c as b,d as v}from"./index-CmOH7P0U.js";const k=({users:l,setUsers:r})=>{const[e,i]=t.useState(""),[n,m]=t.useState(""),[c,o]=t.useState(""),d=h(),x=()=>{if(!e||!n){o("Username and password cannot be empty");return}if(l.some(u=>u.username===e)){o("Username already taken");return}const p={username:e,password:n};r([...l,p]),d("/")};return s.jsxs("div",{className:"login-container",children:[s.jsxs("div",{className:"login-content",children:[s.jsx("h2",{className:"login-title",children:"Sign up"}),s.jsx("p",{className:"welcome-text",children:"Welcome Back! Please login to your account"}),c&&s.jsx("p",{className:"error-text",children:c}),s.jsx("label",{className:"input-label",children:"Username"}),s.jsx("input",{type:"text",className:"input-box",value:e,onChange:a=>i(a.target.value),placeholder:"Enter your username"}),s.jsx("label",{className:"input-label",children:"Password"}),s.jsx("input",{type:"password",className:"input-box",value:n,onChange:a=>m(a.target.value),placeholder:"Enter your password"}),s.jsxs("div",{className:"login-options",children:[s.jsxs("label",{className:"checkbox-container",children:[s.jsx("input",{type:"checkbox"}),"Remember me"]}),s.jsx("a",{href:"#",className:"forgot-password",children:"Forgot password?"})]}),s.jsx("button",{className:"login-btn",onClick:x,children:"Signup"}),s.jsx("div",{className:"or-text",children:"Or"}),s.jsxs("div",{className:"social-login",children:[s.jsx("p",{children:"Login with"}),s.jsxs("div",{className:"social-icons",children:[s.jsx(g,{className:"icon"}),s.jsx(N,{className:"icon"}),s.jsx(b,{className:"icon"}),s.jsx(v,{className:"icon"})]})]}),s.jsxs("p",{className:"signup-text",children:["Have an account? ",s.jsx(j,{to:"/",className:"signup-link",children:"Login here"})]}),s.jsxs("p",{className:"footer-text",children:["2025 © One React - React Admin Dashboard ",s.jsx("br",{}),"Template Made by ",s.jsx("span",{className:"company-name",children:"Flatlogic LLC"})]})]}),s.jsx("div",{className:"login-image"})]})};export{k as default};
