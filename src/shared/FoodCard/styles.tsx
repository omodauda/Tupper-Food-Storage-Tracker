import {StyleSheet} from 'react-native';
import {fontSz, heightPercentage, widthPercentage} from '../../config';
import COLORS from '../../color';

const styles = StyleSheet.create({
  itemCard: {
    marginVertical: heightPercentage(10),
    borderRadius: 8,
    backgroundColor: COLORS.white,
    padding: widthPercentage(7),
    paddingLeft: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPercentage(110),
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
  },
  details: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: fontSz(16),
    color: COLORS.black,
    marginBottom: heightPercentage(4),
  },
  itemLabel: {
    fontWeight: '500',
    fontSize: fontSz(10),
    color: '#9F9F9F',
  },
  value: {
    fontWeight: '300',
    fontSize: fontSz(10),
    color: '#9F9F9F',
  },
  action: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercentage(75),
  },
  qtyWrapper: {
    width: widthPercentage(18),
    height: heightPercentage(18),
    borderRadius: 9,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qty: {
    fontWeight: '500',
    fontSize: fontSz(10),
    color: COLORS.black,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentage(82),
    paddingTop: heightPercentage(70),
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingTop: heightPercentage(22),
    paddingBottom: heightPercentage(40),
    paddingHorizontal: widthPercentage(27),
    width: '94%',
  },
  modalheaderTitle: {
    fontWeight: '600',
    fontSize: fontSz(20),
    color: COLORS.primary,
    marginBottom: heightPercentage(10),
  },
  itemInput: {
    borderWidth: 1,
    borderColor: COLORS.gray7,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(15),
    marginBottom: heightPercentage(30),
  },
  inputText: {
    fontWeight: '500',
    fontSize: fontSz(16),
    color: COLORS.gray7,
  },
  spacedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '400',
    fontSize: fontSz(16),
    color: COLORS.black,
    marginBottom: heightPercentage(10),
  },
  select: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray7,
    borderRadius: 7,
    paddingVertical: heightPercentage(6),
    paddingHorizontal: widthPercentage(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPercentage(134),
  },
  alignView: {
    alignItems: 'center',
  },
  unit: {
    fontWeight: '700',
    fontSize: fontSz(30),
    color: COLORS.black,
  },
  unitControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPercentage(95),
  },
  dateView: {
    marginTop: heightPercentage(25),
  },
  locationDrop: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.white,
    zIndex: 2,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.3,
    elevation: 1,
  },
  storageLocation: {
    paddingVertical: 6,
    borderColor: COLORS.gray7,
    paddingHorizontal: widthPercentage(10),
  },
  selectText: {
    fontWeight: '500',
    fontSize: fontSz(14),
    color: COLORS.black,
  },
  btn: {
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(46),
    // height: heightPercentage(50),
  },
  btnText: {
    fontWeight: '500',
    fontSize: fontSz(16),
  },
  calendarView: {
    width: '94%',
  },
  calendar: {
    borderRadius: 13,
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  icon: {
  },
  // trashModalContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.25)',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: heightPercentage(82),
  //   paddingTop: heightPercentage(70),
  // },
  // trashModalContent: {
  //   backgroundColor: COLORS.white,
  //   borderRadius: 16,
  //   // borderTopRightRadius: 16,
  //   // borderTopLeftRadius: 16,
  //   paddingTop: heightPercentage(22),
  //   paddingBottom: heightPercentage(40),
  //   paddingHorizontal: widthPercentage(27),
  //   width: '94%',
  // },
});

export default styles;
