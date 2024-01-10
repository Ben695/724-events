import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
       // La raison pour laquelle on utilise waitFor avec un délai limite est que la recherche du texte "Envoyer" peut 
      // prendre un certain temps en fonction de la façon dont le rendu de la composante Form. En utilisant waitFor 
      // avec un délai limite, on s'assure que le test attend suffisamment longtemps pour que le texte soit affiché, 
      // tout en évitant que le test ne s'exécute indéfiniment s'il y a un problème et que le texte n'est jamais trouvé.
      await waitFor(() => screen.findByText("Message envoyé !"), {timeout:2000});
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  })
  it("a list a people is displayed", () => {
    // to implement
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
