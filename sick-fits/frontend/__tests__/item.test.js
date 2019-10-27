import ItemComponent from '../components/item'
import { shallow } from 'enzyme'

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 5000,
  description: 'This item is really cool!', 
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
}

describe('<Item />', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag')
    // console.table (PriceTag.dive().text());
    expect(PriceTag.children().text()).toBe('$50');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title)
    const img = wrapper.find('img')
    console.log(img.props());
  })

  it('renders out the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList')
    expect(buttonList.children()).toHaveLength(3)
    console.info(buttonList.children())
    expect(buttonList.find('Link')).toHaveLength(1)
  })
})