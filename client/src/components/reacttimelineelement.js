'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactVisibilitySensor = require('react-visibility-sensor');

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalTimelineElement = function (_Component) {
  _inherits(VerticalTimelineElement, _Component);

  function VerticalTimelineElement(props) {
    _classCallCheck(this, VerticalTimelineElement);

    var _this = _possibleConstructorReturn(this, (VerticalTimelineElement.__proto__ || Object.getPrototypeOf(VerticalTimelineElement)).call(this, props));

    _this.onVisibilitySensorChange = _this.onVisibilitySensorChange.bind(_this);
    _this.state = { visible: false };
    return _this;
  }

  _createClass(VerticalTimelineElement, [{
    key: 'onVisibilitySensorChange',
    value: function onVisibilitySensorChange(isVisible) {
      if (isVisible) {
        this.setState({ visible: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          children = _props.children,
          icon = _props.icon,
          iconStyle = _props.iconStyle,
          iconOnClick = _props.iconOnClick,
          date = _props.date,
          position = _props.position,
          style = _props.style,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        {
          id: id,
          className: (0, _classnames2.default)(className, 'vertical-timeline-element', {
            'vertical-timeline-element--left': position === 'left',
            'vertical-timeline-element--right': position === 'right',
            'vertical-timeline-element--no-children': children === ''
          }),
          style: style
        },
        _react2.default.createElement(
          _reactVisibilitySensor2.default,
          { onChange: this.onVisibilitySensorChange },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { // eslint-disable-line jsx-a11y/no-static-element-interactions
                style: iconStyle,
                onClick: iconOnClick,
                className: '' + (this.state.visible ? 'bounce-in' : 'is-hidden')
              },
              icon
            ),
            _react2.default.createElement(
              'div',
              {
                className: 'vertical-timeline-element-content ' + (this.state.visible ? 'bounce-in' : 'is-hidden')
              },
              children,
              _react2.default.createElement(
                'span',
                { className: 'vertical-timeline-element-date' },
                date
              )
            )
          )
        )
      );
    }
  }]);

  return VerticalTimelineElement;
}(_react.Component);

VerticalTimelineElement.propTypes = {
  id: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  className: _propTypes2.default.string,
  icon: _propTypes2.default.element,
  iconStyle: _propTypes2.default.shape({}),
  iconOnClick: _propTypes2.default.func,
  style: _propTypes2.default.shape({}),
  date: _propTypes2.default.string,
  position: _propTypes2.default.string
};

VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null
};

exports.default = VerticalTimelineElement;