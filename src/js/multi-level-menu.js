Vue.component('amenu-parent', {
  template: "#menu-template",
  props: ['menu'],
  data: function() {
    return {
      showOptions: false,
    }
  },
  methods: {
    selectOption: function(v) {
      alert('clicked');
    }
  }
});
Vue.component('menu-children', {
  template: "#menu-options-template",
  props: ['options'],
  methods: {
    sendUp: function() {
      this.$emit("went-out");
    }
    
  }
});

var app = new Vue({
  el: "#app",
  data: {
    root: [{
      name: 'a',
      options: [{
        name: '1',
        options: []
      }, {
        name: 'asdf',
        options: [{
          name: 'deep',
          options: []
        }]
      }]
    }, {
      name: 'number2',
      options: [{
        name: 'deep',
        options: []
      }]
    }]
  },
});
