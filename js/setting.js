/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'susono_2014_budget';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* susono cofog */
  '20140100': { icon: 'icons/helping-others.svg', color: '#18c516', bcolor: '#935B3B' },/* 福祉の充実のために */
  '20140101': { icon: 'icons/helping-others.svg', color: '#18C516', bcolor: '#935B3B' },/* 社会福祉費 */
  '20140102': { icon: 'icons/c_kosodate_shien.svg', color: '#18C516', bcolor: '#935B3B' },/* 児童福祉費 */
  '20140103': { icon: 'icons/c_yougo.svg', color: '#18C516', bcolor: '#935B3B' },/* 生活保護費 */
  '20140104': { icon: 'icons/restoration.svg', color: '#18C516', bcolor: '#935B3B' },/* 災害救助費 */
  '20140200': { icon: 'icons/waste.svg', color: '#18C516', bcolor: '#935B3B' },/* 衛生のために */
  '20140201': { icon: 'icons/health.svg', color: '#18C516', bcolor: '#935B3B' },/* 保健衛生費 */
  '20140202': { icon: 'icons/waste.svg', color: '#18C516', bcolor: '#935B3B' },/* 清掃費 */
  '20140300': { icon: 'icons/misc-services.svg', color: '#18C516', bcolor: '#935B3B' },/* 総務費として */
  '20140301': { icon: 'icons/misc-services.svg', color: '#18C516', bcolor: '#935B3B' },/* 総務管理費 */
  '20140302': { icon: 'icons/money.svg', color: '#18C516', bcolor: '#935B3B' },/* 徴税費 */
  '20140303': { icon: 'icons/publicaffairs.svg', color: '#18C516', bcolor: '#935B3B' },/* 戸籍住民基本台帳費 */
  '20140304': { icon: 'icons/helping-others.svg', color: '#18C516', bcolor: '#935B3B' },/* 選挙費 */
  '20140305': { icon: 'icons/admin.svg', color: '#18C516', bcolor: '#935B3B' },/* 統計調査費 */
  '20140306': { icon: 'icons/civilian-action.svg', color: '#18C516', bcolor: '#935B3B' },/* 監査委員費 */
  '20140307': { icon: 'icons/police2.svg', color: '#18C516', bcolor: '#935B3B' },/* 市民安全対策費 */
  '20140308': { icon: 'icons/communication.svg', color: '#18C516', bcolor: '#935B3B' },/* 放送施設費 */
  '20140400': { icon: 'icons/japanese-money.svg', color: '#18C516', bcolor: '#935B3B' },/* 借金の返済に */
  '20140401': { icon: 'icons/japanese-money.svg', color: '#18C516', bcolor: '#935B3B' },/* 公債費 */
  '20140500': { icon: 'icons/schools.svg', color: '#18C516', bcolor: '#935B3B' },/* 教育のために */
  '20140501': { icon: 'icons/human-resources.svg', color: '#18C516', bcolor: '#935B3B' },/* 教育総務費 */
  '20140502': { icon: 'icons/primary.svg', color: '#18C516', bcolor: '#935B3B' },/* 小学校費 */
  '20140503': { icon: 'icons/post-secondary.svg', color: '#18C516', bcolor: '#935B3B' },/* 中学校費 */
  '20140504': { icon: 'icons/pre-school.svg', color: '#18C516', bcolor: '#935B3B' },/* 幼稚園費 */
  '20140505': { icon: 'icons/schools.svg', color: '#18C516', bcolor: '#935B3B' },/* 社会教育費 */
  '20140506': { icon: 'icons/health.svg', color: '#18C516', bcolor: '#935B3B' },/* 保健体育費 */
  '20140600': { icon: 'icons/construction.svg', color: '#18C516', bcolor: '#935B3B' },/* 道路工事等に */
  '20140601': { icon: 'icons/human-resources.svg', color: '#18C516', bcolor: '#935B3B' },/* 土木管理費 */
  '20140602': { icon: 'icons/car.svg', color: '#18C516', bcolor: '#935B3B' },/* 道路橋梁費 */
  '20140603': { icon: 'icons/c_sankaku_ikusei.svg', color: '#18C516', bcolor: '#935B3B' },/* 河川費 */
  '20140604': { icon: 'icons/machi.svg', color: '#18C516', bcolor: '#935B3B' },/* 都市計画費 */
  '20140605': { icon: 'icons/admin-housing.svg', color: '#18C516', bcolor: '#935B3B' },/* 国土調査費 */
  '20140606': { icon: 'icons/housing.svg', color: '#18C516', bcolor: '#935B3B' },/* 住宅費 */
  '20140700': { icon: 'icons/farms.svg', color: '#18C516', bcolor: '#935B3B' },/* 農業、林業のために */
  '20140701': { icon: 'icons/farms.svg', color: '#18C516', bcolor: '#935B3B' },/* 農業費 */
  '20140702': { icon: 'icons/tree.svg', color: '#18C516', bcolor: '#935B3B' },/* 林業費 */
  '20140703': { icon: 'icons/defence.svg', color: '#18C516', bcolor: '#935B3B' },/* 演習場対策費 */
  '20140800': { icon: 'icons/c_syoukougyou.svg', color: '#18C516', bcolor: '#935B3B' },/* 商業、工業のために */
  '20140801': { icon: 'icons/c_syoukougyou.svg', color: '#18C516', bcolor: '#935B3B' },/* 商工費 */
  '20140900': { icon: 'icons/c_shyoubou.svg', color: '#18C516', bcolor: '#935B3B' },/* 消防のために */
  '20140901': { icon: 'icons/c_shyoubou.svg', color: '#18C516', bcolor: '#935B3B' },/* 消防費 */
  '20141000': { icon: 'icons/civilian-action.svg', color: '#18C516', bcolor: '#935B3B' },/* 議会運営 */
  '20141001': { icon: 'icons/civilian-action.svg', color: '#18C516', bcolor: '#935B3B' },/* 議会費 */
  '20141100': { icon: 'icons/publicaffairs.svg', color: '#18C516', bcolor: '#935B3B' },/* その他 */
  '20141101': { icon: 'icons/misc-services.svg', color: '#18C516', bcolor: '#935B3B' },/* 労働費 */
  '20141102': { icon: 'icons/restoration.svg', color: '#18C516', bcolor: '#935B3B' },/* 農業水産施設災害復旧費 */
  '20141103': { icon: 'icons/prirodne_nepogode.svg', color: '#18C516', bcolor: '#935B3B' },/* 公共土木施設災害復旧費 */
  '20141104': { icon: 'icons/money.svg', color: '#18C516', bcolor: '#935B3B' },/* 普通財産購入費 */
  '20141105': { icon: 'icons/japanese-money.svg', color: '#18C516', bcolor: '#935B3B' },/* 基金費 */
  '20141106': { icon: 'icons/transfers.svg', color: '#18C516', bcolor: '#935B3B' },/* 特別会計繰出金 */
  '20141107': { icon: 'icons/pig.svg', color: '#18C516', bcolor: '#935B3B' },/* 予備費 */
};

