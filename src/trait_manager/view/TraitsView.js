define(['backbone', 'Abstract/view/DomainViews', './TraitView', './TraitSelectView'],
	function (Backbone, DomainViews, TraitView, TraitSelectView) {

		return DomainViews.extend({

			itemsView: {
				'text': TraitView,
				'select': TraitSelectView,
			},

			initialize: function(o) {
				this.config = o.config || {};
				this.em = o.editor;
				this.pfx = this.config.stylePrefix || '';
				this.className = this.pfx + 'traits';
				this.listenTo(this.em, 'change:selectedComponent', this.updatedCollection);
				this.updatedCollection();
			},

			/**
			 * Update view collection
			 * @private
			 */
			updatedCollection: function() {
				var comp = this.em.get('selectedComponent');
				if(comp){
					this.collection = comp.get('traits');
					this.render();
					this.el.className = this.className;
				}
			},

		});

});
