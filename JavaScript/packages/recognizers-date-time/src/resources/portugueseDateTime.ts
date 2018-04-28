// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

import { BaseDateTime } from "./baseDateTime";
export namespace PortugueseDateTime {
	export const TillRegex = `(?<till>ate|as|às|até|ateh|a|ao|--|-|—|——)(\\s+(o|[aà](s)?))?`;
	export const AndRegex = `(?<and>e|e\\s*o|--|-|—|——)`;
	export const DayRegex = `(?<day>01|02|03|04|05|06|07|08|09|1|10|11|12|13|14|15|16|17|18|19|2|20|21|22|23|24|25|26|27|28|29|3|30|31|4|5|6|7|8|9)(?=\\b|t)`;
	export const MonthNumRegex = `(?<month>01|02|03|04|05|06|07|08|09|10|11|12|1|2|3|4|5|6|7|8|9)\\b`;
	export const MinYearNum = '1500';
	export const MaxYearNum = '2100';
	export const YearRegex = `(?<year>((1[5-9]|20)\\d{2})|9\\d|0\\d|1\\d|2\\d)`;
	export const FullYearRegex = `\\b(?<year>19\\d{2}|20\\d{2})\\b`;
	export const RelativeMonthRegex = `(?<relmonth>([nd]?es[st]e|pr[óo]ximo|passsado|[uú]ltimo)\\s+m[eê]s)\\b`;
	export const MonthRegex = `(?<month>Abril|Abr|Agosto|Ago|Dezembro|Dez|Fevereiro|Fev|Janeiro|Jan|Julho|Jul|Junho|Jun|Mar[çc]o|Mar|Maio|Mai|Novembro|Nov|Outubro|Out|Septembro|Setembro|Sept|Set)`;
	export const MonthSuffixRegex = `(?<msuf>((em|no)\\s+|d[eo]\\s+)?(${RelativeMonthRegex}|${MonthRegex}))`;
	export const DateUnitRegex = `(?<unit>anos|ano|meses|m[êe]s|semanas|semana|dia(s)?)\\b`;
	export const PastRegex = `(?<past>\\b(passad(a|o)(s)?|[uú]ltim[oa](s)?|anterior(es)?|h[aá]|pr[ée]vi[oa](s)?)\\b)`;
	export const FutureRegex = `(?<past>\\b(seguinte(s)?|pr[oó]xim[oa](s)?|dentro\\s+de|em|daqui\\s+a)\\b)`;
	export const SimpleCasesRegex = `\\b((desde\\s+[oa]|desde|d[oa])\\s+)?(dia\\s+)?(${DayRegex})\\s*${TillRegex}\\s*(o dia\\s+)?(${DayRegex})\\s+${MonthSuffixRegex}((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const MonthFrontSimpleCasesRegex = `\\b${MonthSuffixRegex}\\s+((desde\\s+[oa]|desde|d[oa])\\s+)?(dia\\s+)?(${DayRegex})\\s*${TillRegex}\\s*(${DayRegex})((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const MonthFrontBetweenRegex = `\\b${MonthSuffixRegex}\\s+((entre|entre\\s+[oa]s?)\\s+)(dias?\\s+)?(${DayRegex})\\s*${AndRegex}\\s*(${DayRegex})((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const DayBetweenRegex = `\\b((entre|entre\\s+[oa]s?)\\s+)(dia\\s+)?(${DayRegex})\\s*${AndRegex}\\s*(${DayRegex})\\s+${MonthSuffixRegex}((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const OneWordPeriodRegex = `\\b(((pr[oó]xim[oa]?|[nd]?es[st]e|aquel[ea]|[uú]ltim[oa]?|em)\\s+)?(?<month>Abril|Abr|Agosto|Ago|Dezembro|Dez|Fevereiro|Fev|Janeiro|Jan|Julho|Jul|Junho|Jun|Mar[çc]o|Mar|Maio|Mai|Novembro|Nov|Outubro|Out|Septembro|Setembro|Sept|Set)|(?<=\\b(de|do|da|o|a)\\s+)?(pr[oó]xim[oa](s)?|[uú]ltim[oa]s?|est(e|a))\\s+(fim de semana|fins de semana|semana|m[êe]s|ano)|fim de semana|fins de semana|(m[êe]s|anos)? [àa] data)\\b`;
	export const MonthWithYearRegex = `\\b(((pr[oó]xim[oa](s)?|[nd]?es[st]e|aquele|[uú]ltim[oa]?|em)\\s+)?(?<month><month>Abril|Abr|Agosto|Ago|Dezembro|Dez|Fevereiro|Fev|Janeiro|Jan|Julho|Jul|Junho|Jun|Mar[çc]o|Mar|Maio|Mai|Novembro|Nov|Outubro|Out|Septembro|Setembro|Sept|Set)\\s+((de|do|da|o|a)\\s+)?(${FullYearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|[nd]?es[st]e)\\s+ano))\\b`;
	export const MonthNumWithYearRegex = `(${FullYearRegex}(\\s*?)[/\\-\\.](\\s*?)${MonthNumRegex})|(${MonthNumRegex}(\\s*?)[/\\-](\\s*?)${FullYearRegex})`;
	export const WeekOfMonthRegex = `(?<wom>(a|na\\s+)?(?<cardinal>primeira?|1a|segunda|2a|terceira|3a|[qc]uarta|4a|quinta|5a|[uú]ltima)\\s+semana\\s+${MonthSuffixRegex})`;
	export const WeekOfYearRegex = `(?<woy>(a|na\\s+)?(?<cardinal>primeira?|1a|segunda|2a|terceira|3a|[qc]uarta|4a|quinta|5a|[uú]ltima?)\\s+semana(\\s+d[oe]?)?\\s+(${FullYearRegex}|(?<order>pr[oó]ximo|[uú]ltimo|[nd]?es[st]e)\\s+ano))`;
	export const FollowedDateUnit = `^\\s*${DateUnitRegex}`;
	export const NumberCombinedWithDateUnit = `\\b(?<num>\\d+(\\.\\d*)?)${DateUnitRegex}`;
	export const QuarterRegex = `(n?o\\s+)?(?<cardinal>primeiro|1[oº]|segundo|2[oº]|terceiro|3[oº]|[qc]uarto|4[oº])\\s+trimestre(\\s+d[oe]|\\s*,\\s*)?\\s+(${FullYearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|[nd]?es[st]e)\\s+ano)`;
	export const QuarterRegexYearFront = `(${FullYearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|[nd]?es[st]e)\\s+ano)\\s+(n?o\\s+)?(?<cardinal>(primeiro)|1[oº]|segundo|2[oº]|terceiro|3[oº]|[qc]uarto|4[oº])\\s+trimestre`;
	export const AllHalfYearRegex = `^[.]`;
	export const SeasonRegex = `\\b(?<season>(([uú]ltim[oa]|[nd]?es[st][ea]|n?[oa]|(pr[oó]xim[oa]s?|seguinte))\\s+)?(?<seas>primavera|ver[ãa]o|outono|inverno)((\\s+)?(seguinte|((de\\s+|,)?\\s*${FullYearRegex})|((do\\s+)?(?<order>pr[oó]ximo|[uú]ltimo|[nd]?es[st]e)\\s+ano)))?)\\b`;
	export const WhichWeekRegex = `(semana)(\\s*)(?<number>\\d\\d|\\d|0\\d)`;
	export const WeekOfRegex = `(semana)(\\s*)((do|da|de))`;
	export const MonthOfRegex = `(mes)(\\s*)((do|da|de))`;
	export const RangeUnitRegex = `\\b(?<unit>anos|ano|meses|m[êe]s|semanas|semana)\\b`;
	export const InConnectorRegex = `\\b(em)\\b`;
	export const WithinNextPrefixRegex = `^[.]`;
	export const FromRegex = `((desde|de)(\\s*a(s)?)?)$`;
	export const ConnectorAndRegex = `(e\\s*([àa](s)?)?)$`;
	export const BetweenRegex = `(entre\\s*([oa](s)?)?)`;
	export const WeekDayRegex = `\\b(?<weekday>Domingos?|Segundas?-feiras?|Segundas?\\s+feiras?|Segundas?|2a|Ter[çca]s?-feiras?|Ter[çc]as?\\s+feiras?|Ter[cça]s?|3a|Quartas?-feiras?|Quartas?\\s+feiras?|Quartas?|4a|Quintas?-feiras?|Quintas?\\s+feiras?|Quintas?|5a|Sextas?-feiras?|Sextas?\\s+feiras?|Sextas?|6a|S[aá]bados?|2ª|3ª|4ª|5ª|6ª|Dom|Seg|Ter|Qua|Qui|Sex|Sab|Seg.|Ter[cç].|Qua.|Qui.|Sex.|S[aá]b.|Dom.)\\b`;
	export const OnRegex = `(?<=\\b(em|no)\\s+)(${DayRegex}s?)\\b`;
	export const RelaxedOnRegex = `(?<=\\b(em|n[oa]|d[oa])\\s+)(dia\\s+)?((?<day>10|11|12|13|14|15|16|17|18|19|1|20|21|22|23|24|25|26|27|28|29|2|30|31|3|4|5|6|7|8|9)s?)\\b`;
	export const ThisRegex = `\\b(([nd]?es[st][ea]\\s*)${WeekDayRegex})|(${WeekDayRegex}\\s*([nd]?es[st]a\\s+semana))\\b`;
	export const LastDateRegex = `\\b(([uú]ltim[ao])\\s*${WeekDayRegex})|(${WeekDayRegex}(\\s+(([nd]?es[st]a|na|da)\\s+([uú]ltima\\s+)?semana)))\\b`;
	export const NextDateRegex = `\\b(((pr[oó]xim[oa]|seguinte)\\s*)${WeekDayRegex})|(${WeekDayRegex}(\\s+(da\\s+)?(pr[oó]xima|seguinte)?(\\s*semana\\s+seguinte|\\s*semana)?))\\b`;
	export const SpecialDayRegex = `\\b((d?o\\s+)?(dia\\s+antes\\s+de\\s+ontem|antes\\s+de\\s+ontem|anteontem)|((d?o\\s+)?(dia\\s+|depois\\s+|dia\\s+depois\\s+)?de\\s+amanh[aã])|(o\\s)?dia\\s+seguinte|(o\\s)?pr[oó]ximo\\s+dia|(o\\s+)?[uú]ltimo\\s+dia|ontem|amanh[ãa]|hoje)|(do\\s+dia$)\\b`;
	export const SpecialDayWithNumRegex = `^[.]`;
	export const ForTheRegex = `^[.]`;
	export const WeekDayAndDayOfMonthRegex = `^[.]`;
	export const WeekDayOfMonthRegex = `(?<wom>(n?[ao]\\s+)?(?<cardinal>primeir[ao]|1[ao]|segund[ao]|2[ao]|terceir[ao]|3[ao]|[qc]uart[ao]|4[ao]|quint[ao]|5[ao]|[uú]ltim[ao])\\s+${WeekDayRegex}\\s+${MonthSuffixRegex})`;
	export const NumberEndingPattern = `^[.]`;
	export const SpecialDateRegex = `(?<=\\bno\\s+)${DayRegex}\\b`;
	export const OfMonthRegex = `^\\s*de\\s*${MonthSuffixRegex}`;
	export const MonthEndRegex = `(${MonthRegex}\\s*(o)?\\s*$)`;
	export const WeekDayEnd = `${WeekDayRegex}\\s*,?\\s*$`;
	export const DateExtractor1 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}?((\\s*(de)|[/\\\\\\.\\-])\\s*)?${MonthRegex}\\b`;
	export const DateExtractor2 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}\\s*([\\.\\-]|de)?\\s*${MonthRegex}?(\\s*(,|de)\\s*)${YearRegex}\\b`;
	export const DateExtractor3 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}(\\s+|\\s*,\\s*|\\s+de\\s+|\\s*-\\s*)${MonthRegex}((\\s+|\\s*(,|de)\\s*)${YearRegex})?\\b`;
	export const DateExtractor4 = `\\b${MonthNumRegex}\\s*[/\\\\\\-]\\s*${DayRegex}\\s*[/\\\\\\-]\\s*${YearRegex}`;
	export const DateExtractor5 = `\\b${DayRegex}\\s*[/\\\\\\-]\\s*${MonthNumRegex}\\s*[/\\\\\\-]\\s*${YearRegex}`;
	export const DateExtractor6 = `(?<=\\b(em|no|o)\\s+)${MonthNumRegex}[\\-\\.]${DayRegex}\\b`;
	export const DateExtractor7 = `\\b${MonthNumRegex}\\s*/\\s*${DayRegex}((\\s+|\\s*(,|de)\\s*)${YearRegex})?\\b`;
	export const DateExtractor8 = `(?<=\\b(em|no|o)\\s+)${DayRegex}[\\\\\\-]${MonthNumRegex}\\b`;
	export const DateExtractor9 = `\\b${DayRegex}\\s*/\\s*${MonthNumRegex}((\\s+|\\s*(,|de)\\s*)${YearRegex})?\\b`;
	export const DateExtractor10 = `\\b${YearRegex}\\s*[/\\\\\\-]\\s*${MonthNumRegex}\\s*[/\\\\\\-]\\s*${DayRegex}`;
	export const DateExtractor11 = `(?<=\\b(dia)\\s+)${DayRegex}`;
	export const HourNumRegex = `\\b(?<hournum>zero|uma|duas|tr[êe]s|[qc]uatro|cinco|seis|sete|oito|nove|dez|onze|doze)\\b`;
	export const DescRegex = `(?<desc>pm\\b|am\\b|p\\.m\\.|a\\.m\\.)`;
	export const AmDescRegex = `(am\\b|a\\.m\\.|a m\\b|a\\. m\\.\\b|a\\.m\\b|a\\. m\\b)`;
	export const PmDescRegex = `(pm\\b|p\\.m\\.|p\\b|p m\\b|p\\. m\\.\\b|p\\.m\\b|p\\. m\\b)`;
	export const AmPmDescRegex = `(ampm)`;
	export const MinuteNumRegex = `(?<minnum>um|dois|tr[êe]s|[qc]uatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|catorze|quatorze|quinze|dez[ea]sseis|dez[ea]sete|dezoito|dez[ea]nove|vinte|trinta|[qc]uarenta|cin[qc]uenta)`;
	export const DeltaMinuteNumRegex = `(?<deltaminnum>um|dois|tr[êe]s|[qc]uatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|catorze|quatorze|quinze|dez[ea]sseis|dez[ea]sete|dezoito|dez[ea]nove|vinte|trinta|[qc]uarenta|cin[qc]uenta)`;
	export const OclockRegex = `(?<oclock>em\\s+ponto)`;
	export const PmRegex = `(?<pm>((pela|de|da|\\b[àa]\\b|na)\\s+(tarde|noite)))|((depois\\s+do|ap[óo]s\\s+o)\\s+(almo[çc]o|meio dia|meio-dia))`;
	export const AmRegex = `(?<am>(pela|de|da|na)\\s+(manh[ãa]|madrugada))`;
	export const AmTimeRegex = `(?<am>([dn]?es[st]a|(pela|de|da|na))\\s+(manh[ãa]|madrugada))`;
	export const PmTimeRegex = `(?<pm>(([dn]?es[st]a|\\b[àa]\\b|(pela|de|da|na))\\s+(tarde|noite)))|((depois\\s+do|ap[óo]s\\s+o)\\s+(almo[çc]o|meio dia|meio-dia))`;
	export const LessThanOneHour = `(?<lth>((\\s+e\\s+)?(quinze|(um\\s+|dois\\s+|tr[êes]\\s+)?quartos?)|quinze|(\\s*)(um\\s+|dois\\s+|tr[êes]\\s+)?quartos?|(\\s+e\\s+)(meia|trinta)|${BaseDateTime.DeltaMinuteRegex}(\\s+(minuto|minutos|min|mins))|${DeltaMinuteNumRegex}(\\s+(minuto|minutos|min|mins))))`;
	export const TensTimeRegex = `(?<tens>dez|vinte|trinta|[qc]uarenta|cin[qc]uenta)`;
	export const LangTimeRegex = `(?<engtime>(${HourNumRegex}\\s*((e|menos)\\s+)?(${MinuteNumRegex}|(${TensTimeRegex}((\\s*e\\s+)?${MinuteNumRegex})?)))|((${MinuteNumRegex}|(${TensTimeRegex}((\\s*e\\s+)?${MinuteNumRegex})?))\\s*((para as|pras|antes da|antes das)\\s+)?(${HourNumRegex}|${BaseDateTime.HourRegex})))`;
	export const TimePrefix = `(?<prefix>${LessThanOneHour}(\\s+(passad[ao]s)\\s+(as)?|\\s+depois\\s+(das?|do)|\\s+pras?|\\s+(para|antes)?\\s+([àa]s?))?)`;
	export const TimeSuffix = `(?<suffix>(${LessThanOneHour}\\s+)?(${AmRegex}|${PmRegex}|${OclockRegex}))`;
	export const BasicTime = `(?<basictime>${LangTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex}:${BaseDateTime.MinuteRegex}(:${BaseDateTime.SecondRegex})?|${BaseDateTime.HourRegex})`;
	export const AtRegex = `\\b(?<=\\b([aà]s?)\\s+)(${LangTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\b`;
	export const ConnectNumRegex = `(${BaseDateTime.HourRegex}(?<min>00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\s*${DescRegex})`;
	export const TimeRegex1 = `(\\b${TimePrefix}\\s+)?(${LangTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(${DescRegex})`;
	export const TimeRegex2 = `(\\b${TimePrefix}\\s+)?(T)?${BaseDateTime.HourRegex}(\\s*)?:(\\s*)?${BaseDateTime.MinuteRegex}((\\s*)?:(\\s*)?${BaseDateTime.SecondRegex})?((\\s*${DescRegex})|\\b)`;
	export const TimeRegex3 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}\\.${BaseDateTime.MinuteRegex}(\\s*${DescRegex})`;
	export const TimeRegex4 = `\\b((${DescRegex}?)|(${BasicTime}?)(${DescRegex}?))(${TimePrefix}\\s*)(${HourNumRegex}|${BaseDateTime.HourRegex})?(\\s+${TensTimeRegex}(\\s+e\\s+)?${MinuteNumRegex}?)?(${OclockRegex})?\\b`;
	export const TimeRegex5 = `\\b(${TimePrefix}|${BasicTime}${TimePrefix})\\s+(\\s*${DescRegex})?${BasicTime}?\\s*${TimeSuffix}\\b`;
	export const TimeRegex6 = `(${BasicTime}(\\s*${DescRegex})?\\s+${TimeSuffix}\\b)`;
	export const TimeRegex7 = `\\b${TimeSuffix}\\s+[àa]s?\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
	export const TimeRegex8 = `\\b${TimeSuffix}\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
	export const TimeRegex9 = `\\b(?<engtime>${HourNumRegex}\\s+(${TensTimeRegex}\\s*)?(e\\s+)?${MinuteNumRegex}?)\\b`;
	export const TimeRegex10 = `(\\b([àa]|ao?)|na|de|da|pela)\\s+(madrugada|manh[ãa]|meio\\s*dia|meia\\s*noite|tarde|noite)`;
	export const TimeRegex11 = `\\b(${LangTimeRegex})(${DescRegex}?)\\b`;
	export const TimeRegex12 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}(\\s*h\\s*)${BaseDateTime.MinuteRegex}(\\s*${DescRegex})?`;
	export const PrepositionRegex = `(?<prep>([àa]s?|em|por|pelo|pela|no|na|de|d[oa]?)?$)`;
	export const NowRegex = `\\b(?<now>((logo|exatamente)\\s+)?agora(\\s+mesmo)?|neste\\s+momento|(assim\\s+que|t[ãa]o\\s+cedo\\s+quanto)\\s+(poss[ií]vel|possas?|possamos)|o\\s+mais\\s+(cedo|r[aá]pido)\\s+poss[íi]vel|recentemente|previamente)\\b`;
	export const SuffixRegex = `^\\s*((e|a|em|por|pelo|pela|no|na|de)\\s+)?(manh[ãa]|madrugada|meio\\s*dia|tarde|noite)\\b`;
	export const TimeOfDayRegex = `\\b(?<timeOfDay>manh[ãa]|madrugada|tarde|noite|((depois\\s+do|ap[óo]s\\s+o)\\s+(almo[çc]o|meio dia|meio-dia)))\\b`;
	export const SpecificTimeOfDayRegex = `\\b(((((a)?\\s+|[nd]?es[st]a|seguinte|pr[oó]xim[oa]|[uú]ltim[oa])\\s+)?${TimeOfDayRegex}))\\b`;
	export const TimeOfTodayAfterRegex = `^\\s*(,\\s*)?([àa]|em|por|pelo|pela|de|no|na?\\s+)?${SpecificTimeOfDayRegex}`;
	export const TimeOfTodayBeforeRegex = `(${SpecificTimeOfDayRegex}(\\s*,)?(\\s+(a\\s+la(s)?|para))?\\s*)`;
	export const SimpleTimeOfTodayAfterRegex = `(${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(,\\s*)?((en|de(l)?)?\\s+)?${SpecificTimeOfDayRegex}`;
	export const SimpleTimeOfTodayBeforeRegex = `(${SpecificTimeOfDayRegex}(\\s*,)?(\\s+(a\\s+la|para))?\\s*(${HourNumRegex}|${BaseDateTime.HourRegex}))`;
	export const TheEndOfRegex = `((no|ao)\\s+)?(fi(m|nal)|t[ée]rmin(o|ar))(\\s+d?o(\\s+dia)?(\\s+de)?)?\\s*$`;
	export const UnitRegex = `(?<unit>anos|ano|meses|m[êe]s|semanas|semana|dias|dia|horas|hora|h|hr|hrs|hs|minutos|minuto|mins|min|segundos|segundo|segs|seg)\\b`;
	export const ConnectorRegex = `^(,|t|para [ao]|para as|pras|cerca de|cerca das|perto de|perto das|quase)$`;
	export const TimeHourNumRegex = `(?<hour>vinte e um|vinte e dois|vinte e tr[êe]s|vinte e quatro|zero|um|uma|dois|duas|tr[êe]s|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|quatorze|catorze|quinze|dez[ea]sseis|dez[ea]ssete|dezoito|dez[ea]nove|vinte)`;
	export const PureNumFromTo = `((desde|de|da|das)\\s+(a(s)?\\s+)?)?(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?\\s*${TillRegex}\\s*(${BaseDateTime.HourRegex}|${TimeHourNumRegex})\\s*(?<rightDesc>${PmRegex}|${AmRegex}|${DescRegex})?`;
	export const PureNumBetweenAnd = `(entre\\s+((a|as)?\\s+)?)(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?\\s*e\\s*(a(s)?\\s+)?(${BaseDateTime.HourRegex}|${TimeHourNumRegex})\\s*(?<rightDesc>${PmRegex}|${AmRegex}|${DescRegex})?`;
	export const TimeUnitRegex = `(?<unit>horas|hora|h|minutos|minuto|mins|min|segundos|segundo|secs|sec)\\b`;
	export const TimeFollowedUnit = `^\\s*${TimeUnitRegex}`;
	export const TimeNumberCombinedWithUnit = `\\b(?<num>\\d+(\\,\\d*)?)\\s*${TimeUnitRegex}`;
	export const DateTimePeriodNumberCombinedWithUnit = `\\b(?<num>\\d+(\\.\\d*)?)\\s*${TimeUnitRegex}`;
	export const PeriodTimeOfDayWithDateRegex = `\\b((e|[àa]|em|na|no|ao|pel[ao]|de)\\s+)?(?<timeOfDay>manh[ãa]|madrugada|(passado\\s+(o\\s+)?)?meio\\s+dia|tarde|noite)\\b`;
	export const RelativeTimeUnitRegex = `(${PastRegex}|${FutureRegex})\\s+${UnitRegex}|${UnitRegex}\\s+(${PastRegex}|${FutureRegex})`;
	export const SuffixAndRegex = `(?<suffix>\\s*(e)\\s+(?<suffix_num>meia|(um\\s+)?quarto))`;
	export const FollowedUnit = `^\\s*${UnitRegex}`;
	export const DurationNumberCombinedWithUnit = `\\b(?<num>\\d+(\\,\\d*)?)${UnitRegex}`;
	export const AnUnitRegex = `\\b(um(a)?)\\s+${UnitRegex}`;
	export const AllRegex = `\\b(?<all>tod[oa]?\\s+(o|a)\\s+(?<unit>ano|m[êe]s|semana|dia))\\b`;
	export const HalfRegex = `\\b(?<half>mei[oa]\\s+(?<unit>ano|m[êe]s|semana|dia|hora))\\b`;
	export const InexactNumberRegex = `\\b(poucos|pouco|algum|alguns|v[áa]rios)\\b`;
	export const InexactNumberUnitRegex = `\\b(poucos|pouco|algum|alguns|v[áa]rios)\\s+${UnitRegex}`;
	export const HolidayRegex1 = `\\b(?<holiday>sexta-feira santa|sexta-feira da paix[ãa]o|quarta-feira de cinzas|carnaval|dia (de|de los) presidentes?|ano novo chin[eê]s|ano novo|v[ée]spera de ano novo|natal|v[ée]spera de natal|dia de a[cç][ãa]o de gra[çc]as|a[cç][ãa]o de gra[çc]as|yuandan|halloween|dia das bruxas|p[áa]scoa)(\\s+(d[eo]?\\s+)?(${FullYearRegex}|(?<order>(pr[oó]xim[oa]?|[nd]?es[st][ea]|[uú]ltim[oa]?|em))\\s+ano))?\\b`;
	export const HolidayRegex2 = `\\b(?<holiday>(dia( d[eoa]s?)? )?(martin luther king|todos os santos|trabalho|s[ãa]o (patr[íi]cio|francisco|jorge|jo[ãa]o)|independ[êe]ncia|trabalhador|trabalho))(\\s+(d[eo]?\\s+)?(${FullYearRegex}|(?<order>(pr[oó]xim[oa]?|[nd]?es[st][ea]|[uú]ltim[oa]?|em))\\s+ano))?\\b`;
	export const HolidayRegex3 = `\\b(?<holiday>(dia( d[eoa]s?)? )(trabalhador|trabalhadores|trabalho|m[ãa]es?|pais?|mulher(es)?|crian[çc]as?|marmota|professor|professores))(\\s+(d[eo]?\\s+)?(${FullYearRegex}|(?<order>(pr[oó]xim[oa]?|[nd]?es[st][ea]|[uú]ltim[oa]?|em))\\s+ano))?\\b`;
	export const BeforeRegex = `(antes(\\s+(de|dos?|das?)?)?)`;
	export const AfterRegex = `((depois|ap[óo]s)(\\s*(de|d?os?|d?as?)?)?)`;
	export const SinceRegex = `(desde(\\s+(as?|o))?)`;
	export const PeriodicRegex = `\\b(?<periodic>di[áa]ri[ao]|diariamente|mensalmente|semanalmente|quinzenalmente|anualmente)\\b`;
	export const EachExpression = `cada|tod[oa]s?\\s*([oa]s)?`;
	export const EachUnitRegex = `(?<each>(${EachExpression})\\s*${UnitRegex})`;
	export const EachPrefixRegex = `(?<each>(${EachExpression})\\s*$)`;
	export const EachDayRegex = `\\s*(${EachExpression})\\s*dias\\s*\\b`;
	export const BeforeEachDayRegex = `(${EachExpression})\\s*dias(\\s+(as|ao))?\\s*\\b`;
	export const SetEachRegex = `(?<each>(${EachExpression})\\s*)`;
	export const LaterEarlyPeriodRegex = `^[.]`;
	export const WeekWithWeekDayRangeRegex = `^[.]`;
	export const GeneralEndingRegex = `^[.]`;
	export const MiddlePauseRegex = `^[.]`;
	export const PrefixArticleRegex = `^[\\.]`;
	export const OrRegex = `^[.]`;
	export const YearPlusNumberRegex = `^[.]`;
	export const NumberAsTimeRegex = `^[.]`;
	export const TimeBeforeAfterRegex = `^[.]`;
	export const DateNumberConnectorRegex = `^[.]`;
	export const AgoRegex = `\\b(antes|atr[áa]s|no passado)\\b`;
	export const LaterRegex = `\\b(depois d[eoa]s?|ap[óo]s (as)?|desde (as|o)|desde|no futuro|mais tarde)\\b`;
	export const Tomorrow = 'amanh[ãa]';
	export const UnitMap: ReadonlyMap<string, string> = new Map<string, string>([["anos", "Y"],["ano", "Y"],["meses", "MON"],["mes", "MON"],["mês", "MON"],["semanas", "W"],["semana", "W"],["dias", "D"],["dia", "D"],["horas", "H"],["hora", "H"],["hrs", "H"],["hr", "H"],["h", "H"],["minutos", "M"],["minuto", "M"],["mins", "M"],["min", "M"],["segundos", "S"],["segundo", "S"],["segs", "S"],["seg", "S"]]);
	export const UnitValueMap: ReadonlyMap<string, number> = new Map<string, number>([["anos", 31536000],["ano", 31536000],["meses", 2592000],["mes", 2592000],["mês", 2592000],["semanas", 604800],["semana", 604800],["dias", 86400],["dia", 86400],["horas", 3600],["hora", 3600],["hrs", 3600],["hr", 3600],["h", 3600],["minutos", 60],["minuto", 60],["mins", 60],["min", 60],["segundos", 1],["segundo", 1],["segs", 1],["seg", 1]]);
	export const SeasonMap: ReadonlyMap<string, string> = new Map<string, string>([["primavera", "SP"],["verao", "SU"],["verão", "SU"],["outono", "FA"],["inverno", "WI"]]);
	export const SeasonValueMap: ReadonlyMap<string, number> = new Map<string, number>([["SP", 3],["SU", 6],["FA", 9],["WI", 12]]);
	export const CardinalMap: ReadonlyMap<string, number> = new Map<string, number>([["primeiro", 1],["primeira", 1],["1o", 1],["1a", 1],["segundo", 2],["segunda", 2],["2o", 2],["2a", 2],["terceiro", 3],["terceira", 3],["3o", 3],["3a", 3],["cuarto", 4],["quarto", 4],["cuarta", 4],["quarta", 4],["4o", 4],["4a", 4],["quinto", 5],["quinta", 5],["5o", 5],["5a", 5]]);
	export const DayOfWeek: ReadonlyMap<string, number> = new Map<string, number>([["segunda-feira", 1],["segundas-feiras", 1],["segunda", 1],["segundas", 1],["terça-feira", 2],["terças-feiras", 2],["terça", 2],["terças", 2],["terca-feira", 2],["tercas-feiras", 2],["terca", 2],["tercas", 2],["quarta-feira", 3],["quartas-feiras", 3],["quarta", 3],["quartas", 3],["quinta-feira", 4],["quintas-feiras", 4],["quinta", 4],["quintas", 4],["sexta-feira", 5],["sextas-feiras", 5],["sexta", 5],["sextas", 5],["sabado", 6],["sabados", 6],["sábado", 6],["sábados", 6],["domingo", 0],["domingos", 0],["seg", 1],["2a", 1],["ter", 2],["3a", 2],["qua", 3],["4a", 3],["qui", 4],["5a", 4],["sex", 5],["6a", 5],["sab", 6],["dom", 0]]);
	export const MonthOfYear: ReadonlyMap<string, number> = new Map<string, number>([["1", 1],["2", 2],["3", 3],["4", 4],["5", 5],["6", 6],["7", 7],["8", 8],["9", 9],["10", 10],["11", 11],["12", 12],["janeiro", 1],["fevereiro", 2],["março", 3],["marco", 3],["abril", 4],["maio", 5],["junho", 6],["julho", 7],["agosto", 8],["septembro", 9],["setembro", 9],["outubro", 10],["novembro", 11],["dezembro", 12],["jan", 1],["fev", 2],["mar", 3],["abr", 4],["mai", 5],["jun", 6],["jul", 7],["ago", 8],["sept", 9],["set", 9],["out", 10],["nov", 11],["dez", 12],["01", 1],["02", 2],["03", 3],["04", 4],["05", 5],["06", 6],["07", 7],["08", 8],["09", 9]]);
	export const Numbers: ReadonlyMap<string, number> = new Map<string, number>([["zero", 0],["um", 1],["uma", 1],["dois", 2],["tres", 3],["três", 3],["quatro", 4],["cinco", 5],["seis", 6],["sete", 7],["oito", 8],["nove", 9],["dez", 10],["onze", 11],["doze", 12],["dezena", 12],["dezenas", 12],["treze", 13],["catorze", 14],["quatorze", 14],["quinze", 15],["dezesseis", 16],["dezasseis", 16],["dezessete", 17],["dezassete", 17],["dezoito", 18],["dezenove", 19],["dezanove", 19],["vinte", 20],["vinte e um", 21],["vinte e uma", 21],["vinte e dois", 22],["vinte e duas", 22],["vinte e tres", 23],["vinte e três", 23],["vinte e quatro", 24],["vinte e cinco", 25],["vinte e seis", 26],["vinte e sete", 27],["vinte e oito", 28],["vinte e nove", 29],["trinta", 30]]);
	export const HolidayNames: ReadonlyMap<string, string[]> = new Map<string, string[]>([["pai", ["diadopai","diadospais"]],["mae", ["diadamae","diadasmaes"]],["acaodegracas", ["diadegracas","diadeacaodegracas","acaodegracas"]],["trabalho", ["diadotrabalho","diadotrabalhador","diadostrabalhadores"]],["pascoa", ["diadepascoa","pascoa"]],["natal", ["natal","diadenatal"]],["vesperadenatal", ["vesperadenatal"]],["anonovo", ["anonovo","diadeanonovo","diadoanonovo"]],["vesperadeanonovo", ["vesperadeanonovo","vesperadoanonovo"]],["yuandan", ["yuandan"]],["todosossantos", ["todosossantos"]],["professor", ["diadoprofessor","diadosprofessores"]],["crianca", ["diadacrianca","diadascriancas"]],["mulher", ["diadamulher"]]]);
	export const VariableHolidaysTimexDictionary: ReadonlyMap<string, string> = new Map<string, string>([["pai", "-06-WXX-7-3"],["mae", "-05-WXX-7-2"],["acaodegracas", "-11-WXX-4-4"],["trabalho", "-05-WXX-1-1"],["memoria", "-03-WXX-2-4"]]);
	export const DoubleNumbers: ReadonlyMap<string, number> = new Map<string, number>([["metade", 0.5],["quarto", 0.25]]);
	export const DateTokenPrefix = 'em ';
	export const TimeTokenPrefix = 'as ';
	export const TokenBeforeDate = 'o ';
	export const TokenBeforeTime = 'as ';
	export const NextPrefixRegex = `(pr[oó]xim[oa]|seguinte)\\b`;
	export const PastPrefixRegex = `([uú]ltim[oa])\\b`;
	export const ThisPrefixRegex = `([nd]?es[st][ea])\\b`;
	export const RelativeDayRegex = `^[\\.]`;
	export const RestOfDateRegex = `^[\\.]`;
	export const RelativeDurationUnitRegex = `^[\\.]`;
	export const FromToRegex = `\\b(from).+(to)\\b.+`;
	export const SingleAmbiguousMonthRegex = `^(the\\s+)?(may|march)$`;
	export const PrepositionSuffixRegex = `\\b(on|in|at|around|from|to)$`;
	export const RestOfDateTimeRegex = `^[\\.]`;
	export const SetWeekDayRegex = `^[\\.]`;
	export const NightRegex = `\\b(meia noite|noite|de noite)\\b`;
	export const CommonDatePrefixRegex = `\\b(dia)\\s+$`;
	export const DurationUnitRegex = `^[\\.]`;
	export const DurationConnectorRegex = `^[.]`;
	export const CenturyRegex = `^[.]`;
	export const DecadeRegex = `^[.]`;
	export const DecadeWithCenturyRegex = `^[.]`;
	export const RelativeDecadeRegex = `^[.]`;
	export const FullTextYearRegex = `^[\\*]`;
	export const YearSuffix = `(,?\\s*(${YearRegex}|${FullTextYearRegex}))`;
	export const YearAfterRegex = `^[.]`;
	export const YearPeriodRegex = `^[.]`;
	export const FutureSuffixRegex = `^[.]`;
	export const WrittenDecades: ReadonlyMap<string, number> = new Map<string, number>([["", 0]]);
	export const SpecialDecadeCases: ReadonlyMap<string, number> = new Map<string, number>([["", 0]]);
	export const DefaultLanguageFallback = 'DMY';
}
