/* eslint-disable react/jsx-no-undef */
import { fireEvent } from "@testing-library/react";
import selectEvent from "react-select-event";
import { screen, render } from "../../test-utils.js";
import ContinentsMenu from "./ContinentsMenu";

describe('ContinentsMenu component', () => {
   it('renders ContinentsMenu Component', () => {
      render(<ContinentsMenu />)

      expect(screen.getByRole('button')).toBeInTheDocument()
   })
   it('works select', async () => {

      render(<ContinentsMenu />);

      expect(screen.getByTestId('form')).toHaveFormValues({ continent: '' });

      await selectEvent.select(screen.getByLabelText('Continents'), 'Africa')

      console.log(screen.getByLabelText('Continents'))
   })
})