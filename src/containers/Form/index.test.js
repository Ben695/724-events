import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";

describe("When form is created", () => {
  it("a list of inputs card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
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
      await waitFor(() => screen.findByText("Envoyer"), {timeout:2000});
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
