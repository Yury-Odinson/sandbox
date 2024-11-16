(function () {

    class Tooltip {
        constructor() {
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            this.el.classList.toggle(`${this.name}_active`, false);

            this.listeners = [];

            document.body.appendChild(this.el);

            this.onHide = this.onHide.bind(this);
        }

        get name() {
            return 'tooltip';
        }

        get indent() {
            return 5;
        }

        delegate(eventName, element, cssSelector, callback) {
            const fn = event => {
                if (!event.target.matches(cssSelector)) {
                    return;
                }

                callback(event);
            };

            element.addEventListener(eventName, fn);
            this.listeners.push({ fn, element, eventName });

            return this;
        }

        onShow = (event) => {

        }

        onHide() {

        }

        attach(root) {
            this
                .delegate('mouseover', root, '[data-tooltip]', this.onShow)
                .delegate('mouseout', root, '[data-tooltip]', this.onHide);

        }

        detach() {

        }
    }

    window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);