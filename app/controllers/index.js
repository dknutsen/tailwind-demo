import Controller from '@ember/controller';
import prefills from '../prefills';

export default Controller.extend({
  prefills,

  actions: {
    prefillSelected(newPrefillIndex) {
      const prefill = prefills.findBy('index', newPrefillIndex);
      this.set('prefill', newPrefillIndex);
      if (!prefill || !prefill.template) { return; }
      this.set('templateContent', prefill.template);
    }
  }
});
