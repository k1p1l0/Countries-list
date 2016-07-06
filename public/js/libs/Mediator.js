'use strict';

var Mediator = ( () => {
    function Mediator() {
        this.channels = {};

        return this;
    }

    Mediator.prototype.sub = function mediatorSubscribe (channel, callback) {
        if (!this.channels.hasOwnProperty(channel)) {
            this.channels[channel] = [];
        }

        this.channels[channel].push(callback);

        return true;
    };

    Mediator.prototype.pub = function mediatorPublish (channel, value) {
        if (!this.channels.hasOwnProperty(channel) ) {
            return false;
        }

        this.channels[channel].forEach(function (subscriber) {
            subscriber(value);
        });

        return true;
    };

    return Mediator;
})();