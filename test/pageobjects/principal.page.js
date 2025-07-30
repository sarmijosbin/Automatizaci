import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrincipalPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    open () {
        return super.open();
    }
}

export default new PrincipalPage();
