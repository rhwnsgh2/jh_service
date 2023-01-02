import React from "react";
import { HeaderComponent } from "./headerComponent";

describe("<HeaderComponent />", () => {
  it("renders Header Name", () => {
    cy.mount(<HeaderComponent name="HeaderName" />);
    cy.contains("HeaderName");
  });
});
