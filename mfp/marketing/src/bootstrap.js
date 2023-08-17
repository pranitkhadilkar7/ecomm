import React from "react"
import ReactDom from "react-dom"

console.log("Hi There")

export const mount = (el) => {
  ReactDom.render(<h1>Hi there!!</h1>, el)
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root")
  console.log("devRoot", devRoot)
  if (devRoot) {
    mount(devRoot)
  }
}
