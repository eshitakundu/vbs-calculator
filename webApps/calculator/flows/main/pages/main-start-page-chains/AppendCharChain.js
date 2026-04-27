define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class AppendCharChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.charToAdd
     */
    async run(context, { charToAdd }) {
      const { $page, $flow, $application, $constants, $variables, $chain } = context;

      $variables.displayString = $variables.displayString + charToAdd;
    }
  }

  return AppendCharChain;
});
