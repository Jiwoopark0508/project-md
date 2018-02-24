let dummie = [["날짜", "종가"],
['2/16/15', '49,900'],
['2/17/15', '49,500'],
['2/23/15', '50,500'],
['2/24/15', '49,850'],
['2/25/15', '49,500'],
['2/26/15', '49,600'],
['2/27/15', '50,400'],
['3/2/15', '49,850'],
['3/3/15', '48,800'],
['3/4/15', '48,850'],
['3/5/15', '48,650'],
['3/6/15', '47,100'],
['3/9/15', '46,400'],
['3/10/15', '48,150'],
['3/11/15', '47,200'],
['3/12/15', '46,200'],
['3/13/15', '47,200'],
['3/16/15', '46,800'],
['3/17/15', '51,100'],
['3/18/15', '50,300'],
['3/19/15', '50,500'],
['3/20/15', '52,700'],
['3/23/15', '52,000'],
['3/24/15', '51,400'],
['3/25/15', '51,700'],
['3/26/15', '52,300'],
['3/27/15', '52,000'],
['3/30/15', '53,400'],
['3/31/15', '56,400'],
['4/1/15', '56,800'],
['4/2/15', '55,400'],
['4/3/15', '55,700'],
['4/6/15', '56,600'],
['4/7/15', '56,700'],
['4/8/15', '56,500'],
['4/9/15', '56,800'],
['4/10/15', '56,700'],
['4/13/15', '56,000'],
['4/14/15', '54,900'],
['4/15/15', '54,800'],
['4/16/15', '56,200'],
['4/17/15', '58,100'],
['4/20/15', '58,200'],
['4/21/15', '58,500'],
['4/22/15', '58,100'],
['4/23/15', '58,700'],
['4/24/15', '59,900'],
['4/27/15', '60,600'],
['4/28/15', '62,000'],
['4/29/15', '64,700'],
['4/30/15', '65,600'],
['5/4/15', '64,400'],
['5/6/15', '65,300'],
['5/7/15', '63,500'],
['5/8/15', '63,700'],
['5/11/15', '67,500'],
['5/12/15', '67,400'],
['5/13/15', '67,100'],
['5/14/15', '69,400'],
['5/15/15', '69,300'],
['5/18/15', '72,600'],
['5/19/15', '71,500'],
['5/20/15', '70,800'],
['5/21/15', '71,100'],
['5/22/15', '72,600'],
['5/26/15', '71,300'],
['5/27/15', '67,900'],
['5/28/15', '68,400'],
['5/29/15', '63,700'],
['6/1/15', '66,200'],
['6/2/15', '67,000'],
['6/3/15', '66,400'],
['6/4/15', '64,800'],
['6/5/15', '65,000'],
['6/8/15', '64,300'],
['6/9/15', '66,700'],
['6/10/15', '67,100'],
['6/11/15', '69,200'],
['6/12/15', '69,500'],
['6/15/15', '69,600'],
['6/16/15', '69,300'],
['6/17/15', '68,400'],
['6/18/15', '71,900'],
['6/19/15', '70,800'],
['6/22/15', '71,300'],
['6/23/15', '71,800'],
['6/24/15', '73,400'],
['6/25/15', '73,800'],
['6/26/15', '78,000'],
['6/29/15', '78,800'],
['6/30/15', '79,500'],
['7/1/15', '82,500'],
['7/2/15', '81,700'],
['7/3/15', '82,800'],
['7/6/15', '81,300'],
['7/7/15', '80,400'],
['7/8/15', '77,400'],
['7/9/15', '77,900'],
['7/10/15', '78,800'],
['7/13/15', '80,300'],
['7/14/15', '80,500'],
['7/15/15', '80,500'],
['7/16/15', '81,300'],
['7/17/15', '83,200'],
['7/20/15', '86,700'],
['7/21/15', '86,300'],
['7/22/15', '89,200'],
['7/23/15', '88,000'],
['7/24/15', '90,000'],
['7/27/15', '87,500'],
['7/28/15', '90,000'],
['7/29/15', '95,000'],
['7/30/15', '94,400'],
['7/31/15', '97,500'],
['8/3/15', '97,800'],
['8/4/15', '96,300'],
['8/5/15', '99,600'],
['8/6/15', '99,500'],
['8/7/15', '100,000'],
['8/10/15', '103,500'],
['8/11/15', '101,500'],
['8/12/15', '100,500'],
['8/13/15', '99,900'],
['8/17/15', '100,000'],
['8/18/15', '95,900'],
['8/19/15', '89,800'],
['8/20/15', '86,000'],
['8/21/15', '87,100'],
['8/24/15', '84,700'],
['8/25/15', '90,400'],
['8/26/15', '90,800'],
['8/27/15', '92,200'],
['8/28/15', '94,100'],
['8/31/15', '92,300'],
['9/1/15', '89,300'],
['9/2/15', '91,600'],
['9/3/15', '89,900'],
['9/4/15', '87,600'],
['9/7/15', '85,900'],
['9/8/15', '82,100'],
['9/9/15', '89,300'],
['9/10/15', '89,300'],
['9/11/15', '87,400'],
['9/14/15', '83,700'],
['9/15/15', '83,000'],
['9/16/15', '84,200'],
['9/17/15', '83,100'],
['9/18/15', '88,300'],
['9/21/15', '85,400'],
['9/22/15', '86,400'],
['9/23/15', '80,900'],
['9/24/15', '80,700'],
['9/25/15', '73,000'],
['9/30/15', '67,900'],
['10/1/15', '72,400'],
['10/2/15', '72,600'],
['10/5/15', '74,300'],
['10/6/15', '73,900'],
['10/7/15', '74,600'],
['10/8/15', '73,800'],
['10/12/15', '73,300'],
['10/13/15', '71,700'],
['10/14/15', '75,000'],
['10/15/15', '75,400'],
['10/16/15', '73,200'],
['10/19/15', '73,800'],
['10/20/15', '78,500'],
['10/21/15', '78,000'],
['10/22/15', '77,700'],
['10/23/15', '79,500'],
['10/26/15', '79,400'],
['10/27/15', '83,600'],
['10/28/15', '88,000'],
['10/29/15', '88,300'],
['10/30/15', '90,000'],
['11/2/15', '89,400'],
['11/3/15', '91,000'],
['11/4/15', '92,900'],
['11/5/15', '92,900'],
['11/6/15', '92,800'],
['11/9/15', '89,900'],
['11/10/15', '90,800'],
['11/11/15', '87,100'],
['11/12/15', '87,700'],
['11/13/15', '87,200'],
['11/16/15', '84,500'],
['11/17/15', '88,400'],
['11/18/15', '84,600'],
['11/19/15', '86,400'],
['11/20/15', '85,300'],
['11/23/15', '89,400'],
['11/24/15', '86,500'],
['11/25/15', '84,300'],
['11/26/15', '85,400'],
['11/27/15', '84,400'],
['11/30/15', '83,900'],
['12/1/15', '84,300'],
['12/2/15', '85,400'],
['12/3/15', '83,900'],
['12/4/15', '83,700'],
['12/7/15', '80,700'],
['12/8/15', '79,500'],
['12/9/15', '78,900'],
['12/10/15', '76,500'],
['12/11/15', '76,200'],
['12/14/15', '76,900'],
['12/15/15', '78,000'],
['12/16/15', '78,200'],
['12/17/15', '80,600'],
['12/18/15', '80,500'],
['12/21/15', '77,900'],
['12/22/15', '80,700'],
['12/23/15', '80,900'],
['12/24/15', '84,000'],
['12/28/15', '79,600'],
['12/29/15', '79,700'],
['12/30/15', '78,100'],
['1/4/16', '76,900'],
['1/5/16', '77,100'],
['1/6/16', '69,300'],
['1/7/16', '69,500'],
['1/8/16', '67,900'],
['1/11/16', '64,900'],
['1/12/16', '65,400'],
['1/13/16', '68,000'],
['1/14/16', '67,800'],
['1/15/16', '66,800'],
['1/18/16', '67,600'],
['1/19/16', '66,700'],
['1/20/16', '64,300'],
['1/21/16', '62,900'],
['1/22/16', '65,000'],
['1/25/16', '68,500'],
['1/26/16', '67,700'],
['1/27/16', '68,200'],
['1/28/16', '70,100'],
['1/29/16', '70,800'],
['2/1/16', '72,700'],
['2/2/16', '72,200'],
['2/3/16', '71,100'],
['2/4/16', '72,000'],
['2/5/16', '70,600'],
['2/11/16', '69,400'],
['2/12/16', '68,000'],
['2/15/16', '70,900'],
['2/16/16', '73,300'],
['2/17/16', '70,000'],
['2/18/16', '71,800'],
['2/19/16', '70,700'],
['2/22/16', '72,800'],
['2/23/16', '73,000'],
['2/24/16', '72,400'],
['2/25/16', '71,100'],
['2/26/16', '70,000'],
['2/29/16', '70,800'],
['3/2/16', '71,100'],
['3/3/16', '71,800'],
['3/4/16', '74,500'],
['3/7/16', '73,500'],
['3/8/16', '73,000'],
['3/9/16', '72,200'],
['3/10/16', '73,700'],
['3/11/16', '73,100'],
['3/14/16', '72,800'],
['3/15/16', '73,000'],
['3/16/16', '74,000'],
['3/17/16', '71,400'],
['3/18/16', '70,400'],
['3/21/16', '69,800'],
['3/22/16', '70,200'],
['3/23/16', '68,100'],
['3/24/16', '67,600'],
['3/25/16', '66,900'],
['3/28/16', '67,700'],
['3/29/16', '67,100'],
['3/30/16', '65,200'],
['3/31/16', '65,200'],
['4/1/16', '65,300'],
['4/4/16', '64,700'],
['4/5/16', '66,700'],
['4/6/16', '66,100'],
['4/7/16', '65,900'],
['4/8/16', '65,500'],
['4/11/16', '64,700'],
['4/12/16', '65,200'],
['4/14/16', '64,800'],
['4/15/16', '68,400'],
['4/18/16', '68,700'],
['4/19/16', '68,700'],
['4/20/16', '68,200'],
['4/21/16', '68,900'],
['4/22/16', '69,300'],
['4/25/16', '68,700'],
['4/26/16', '69,200'],
['4/27/16', '67,700'],
['4/28/16', '66,500'],
['4/29/16', '67,800'],
['5/2/16', '68,300'],
['5/3/16', '68,100'],
['5/4/16', '67,300'],
['5/9/16', '65,500'],
['5/10/16', '65,500'],
['5/11/16', '64,900'],
['5/12/16', '65,200'],
['5/13/16', '64,900'],
['5/16/16', '64,300'],
['5/17/16', '64,600'],
['5/18/16', '63,400'],
['5/19/16', '62,800'],
['5/20/16', '63,400'],
['5/23/16', '65,900'],
['5/24/16', '64,700'],
['5/25/16', '64,600'],
['5/26/16', '64,100'],
['5/27/16', '66,300'],
['5/30/16', '66,300'],
['5/31/16', '66,900'],
['6/1/16', '67,100'],
['6/2/16', '66,700'],
['6/3/16', '68,800'],
['6/7/16', '70,900'],
['6/8/16', '71,200'],
['6/9/16', '69,900'],
['6/10/16', '71,700'],
['6/13/16', '70,000'],
['6/14/16', '68,000'],
['6/15/16', '68,000'],
['6/16/16', '66,700'],
['6/17/16', '67,400'],
['6/20/16', '69,100'],
['6/21/16', '69,200'],
['6/22/16', '69,200'],
['6/23/16', '70,200'],
['6/24/16', '67,900'],
['6/27/16', '69,900'],
['6/28/16', '70,000'],
['6/29/16', '73,100'],
['6/30/16', '73,200'],
['7/1/16', '72,000'],
['7/4/16', '71,600'],
['7/5/16', '73,000'],
['7/6/16', '72,100'],
['7/7/16', '73,800'],
['7/8/16', '75,700'],
['7/11/16', '79,200'],
['7/12/16', '78,900'],
['7/13/16', '77,700'],
['7/14/16', '79,700'],
['7/15/16', '78,500'],
['7/18/16', '77,200'],
['7/19/16', '77,600'],
['7/20/16', '79,500'],
['7/21/16', '82,100'],
['7/22/16', '80,900'],
['7/25/16', '79,800'],
['7/26/16', '79,500'],
['7/27/16', '81,000'],
['7/28/16', '81,000'],
['7/29/16', '80,600'],
['8/1/16', '80,800'],
['8/2/16', '79,500'],
['8/3/16', '78,200'],
['8/4/16', '78,800'],
['8/5/16', '80,100'],
['8/8/16', '80,800'],
['8/9/16', '81,200'],
['8/10/16', '80,600'],
['8/11/16', '81,200'],
['8/12/16', '80,900'],
['8/16/16', '80,900'],
['8/17/16', '80,100'],
['8/18/16', '79,500'],
['8/19/16', '80,300'],
['8/22/16', '79,600'],
['8/23/16', '78,400'],
['8/24/16', '80,000'],
['8/25/16', '80,000'],
['8/26/16', '78,800'],
['8/29/16', '79,300'],
['8/30/16', '85,200'],
['8/31/16', '84,700'],
['9/1/16', '84,600'],
['9/2/16', '84,500'],
['9/5/16', '86,400'],
['9/6/16', '84,600'],
['9/7/16', '83,500'],
['9/8/16', '83,900'],
['9/9/16', '82,600'],
['9/12/16', '81,200'],
['9/13/16', '83,400'],
['9/19/16', '82,700'],
['9/20/16', '81,800'],
['9/21/16', '81,000'],
['9/22/16', '82,800'],
['9/23/16', '78,900'],
['9/26/16', '79,100'],
['9/27/16', '79,000'],
['9/28/16', '77,800'],
['9/29/16', '77,500'],
['9/30/16', '76,300'],
['10/4/16', '78,800'],
['10/5/16', '78,900'],
['10/6/16', '79,500'],
['10/7/16', '79,300'],
['10/10/16', '80,600'],
['10/11/16', '80,500'],
['10/12/16', '77,400'],
['10/13/16', '73,500'],
['10/14/16', '72,900'],
['10/17/16', '72,700'],
['10/18/16', '73,100'],
['10/19/16', '73,400'],
['10/20/16', '71,100'],
['10/21/16', '71,700'],
['10/24/16', '72,400'],
['10/25/16', '72,500'],
['10/26/16', '69,000'],
['10/27/16', '69,500'],
['10/28/16', '67,900'],
['10/31/16', '64,800'],
['11/1/16', '62,200'],
['11/2/16', '58,900'],
['11/3/16', '60,800'],
['11/4/16', '61,900'],
['11/7/16', '63,900'],
['11/8/16', '62,800'],
['11/9/16', '64,000'],
['11/10/16', '71,100'],
['11/11/16', '69,500'],
['11/14/16', '68,800'],
['11/15/16', '64,300'],
['11/16/16', '65,000'],
['11/17/16', '69,000'],
['11/18/16', '68,100'],
['11/21/16', '68,200'],
['11/22/16', '68,300'],
['11/23/16', '67,100'],
['11/24/16', '68,000'],
['11/25/16', '68,800'],
['11/28/16', '69,000'],
['11/29/16', '67,700'],
['11/30/16', '66,300'],
['12/1/16', '65,600'],
['12/2/16', '63,900'],
['12/5/16', '63,400'],
['12/6/16', '63,600'],
['12/7/16', '64,700'],
['12/8/16', '65,500'],
['12/9/16', '65,200'],
['12/12/16', '68,800'],
['12/13/16', '68,800'],
['12/14/16', '68,400'],
['12/15/16', '68,200'],
['12/16/16', '69,200'],
['12/19/16', '68,100'],
['12/20/16', '69,600'],
['12/21/16', '69,000'],
['12/22/16', '66,900'],
['12/23/16', '67,000'],
['12/26/16', '65,800'],
['12/27/16', '67,000'],
['12/28/16', '66,200'],
['12/29/16', '67,000'],
['1/2/17', '69,000'],
['1/3/17', '70,900'],
['1/4/17', '70,800'],
['1/5/17', '70,900'],
['1/6/17', '70,700'],
['1/9/17', '69,500'],
['1/10/17', '69,700'],
['1/11/17', '69,500'],
['1/12/17', '70,100'],
['1/13/17', '69,500'],
['1/16/17', '68,300'],
['1/17/17', '67,300'],
['1/18/17', '66,600'],
['1/19/17', '66,900'],
['1/20/17', '66,100'],
['1/23/17', '66,400'],
['1/24/17', '64,300'],
['1/25/17', '61,800'],
['1/26/17', '62,100'],
['1/31/17', '62,000'],
['2/1/17', '62,600'],
['2/2/17', '65,300'],
['2/3/17', '61,000'],
['2/6/17', '58,700'],
['2/7/17', '58,700'],
['2/8/17', '56,800'],
['2/9/17', '56,600'],
['2/10/17', '54,400'],
['2/13/17', '54,500'],
['2/14/17', '55,800'],
['2/15/17', '56,500'],
['2/16/17', '55,000'],
['2/17/17', '55,300'],
['2/20/17', '56,000'],
['2/21/17', '56,400'],
['2/22/17', '57,300'],
['2/23/17', '57,800'],
['2/24/17', '57,200'],
['2/27/17', '57,700'],
['2/28/17', '58,300'],
['3/2/17', '56,800'],
['3/3/17', '56,300'],
['3/6/17', '57,700'],
['3/7/17', '57,200'],
['3/8/17', '56,700'],
['3/9/17', '57,300'],
['3/10/17', '59,000'],
['3/13/17', '58,800'],
['3/14/17', '57,800'],
['3/15/17', '57,800'],
['3/16/17', '57,200'],
['3/17/17', '57,800'],
['3/20/17', '56,800'],
['3/21/17', '57,600'],
['3/22/17', '57,200'],
['3/23/17', '58,000'],
['3/24/17', '58,000'],
['3/27/17', '57,900'],
['3/28/17', '57,900'],
['3/29/17', '57,100'],
['3/30/17', '56,600'],
['3/31/17', '57,600'],
['4/3/17', '57,900'],
['4/4/17', '58,200'],
['4/5/17', '57,300'],
['4/6/17', '57,400'],
['4/7/17', '58,000'],
['4/10/17', '58,300'],
['4/11/17', '56,600'],
['4/12/17', '56,900'],
['4/13/17', '57,100'],
['4/14/17', '57,500'],
['4/17/17', '57,000'],
['4/18/17', '60,300'],
['4/19/17', '61,700'],
['4/20/17', '62,900'],
['4/21/17', '62,800'],
['4/24/17', '62,200'],
['4/25/17', '62,400'],
['4/26/17', '62,600'],
['4/27/17', '64,900'],
['4/28/17', '63,800'],
['5/2/17', '62,300'],
['5/4/17', '63,000'],
['5/8/17', '64,000'],
['5/10/17', '63,900'],
['5/11/17', '65,100'],
['5/12/17', '63,900'],
['5/15/17', '63,600'],
['5/16/17', '62,000'],
['5/17/17', '61,200'],
['5/18/17', '61,000'],
['5/19/17', '63,000'],
['5/22/17', '61,900'],
['5/23/17', '61,500'],
['5/24/17', '62,400'],
['5/25/17', '62,900'],
['5/26/17', '64,100'],
['5/29/17', '64,300'],
['5/30/17', '63,400'],
['5/31/17', '63,600'],
['6/1/17', '63,500'],
['6/2/17', '63,900'],
['6/5/17', '64,500'],
['6/7/17', '63,100'],
['6/8/17', '64,700'],
['6/9/17', '63,600'],
['6/12/17', '63,000'],
['6/13/17', '63,200'],
['6/14/17', '62,800'],
['6/15/17', '61,200'],
['6/16/17', '60,900'],
['6/19/17', '59,800'],
['6/20/17', '57,500'],
['6/21/17', '58,100'],
['6/22/17', '57,700'],
['6/23/17', '58,700'],
['6/26/17', '57,600'],
['6/27/17', '57,600'],
['6/28/17', '56,900'],
['6/29/17', '56,800'],
['6/30/17', '57,000'],
['7/3/17', '57,000'],
['7/4/17', '58,600'],
['7/5/17', '58,100'],
['7/6/17', '57,600'],
['7/7/17', '59,700'],
['7/10/17', '58,300'],
['7/11/17', '60,100'],
['7/12/17', '60,400'],
['7/13/17', '61,000'],
['7/14/17', '57,600'],
['7/17/17', '51,000'],
['7/18/17', '47,950'],
['7/19/17', '50,200'],
['7/20/17', '51,000'],
['7/21/17', '50,400'],
['7/24/17', '50,500'],
['7/25/17', '51,900'],
['7/26/17', '52,000'],
['7/27/17', '51,800'],
['7/28/17', '51,200'],
['7/31/17', '51,700'],
['8/1/17', '52,500'],
['8/2/17', '43,800'],
['8/3/17', '38,500'],
['8/4/17', '39,000'],
['8/7/17', '40,900'],
['8/8/17', '39,800'],
['8/9/17', '39,500'],
['8/10/17', '39,700'],
['8/11/17', '38,650'],
['8/14/17', '36,900'],
['8/16/17', '42,850'],
['8/17/17', '42,850'],
['8/18/17', '42,600'],
['8/21/17', '42,000'],
['8/22/17', '40,750'],
['8/23/17', '41,750'],
['8/24/17', '41,500'],
['8/25/17', '43,350'],
['8/28/17', '45,900'],
['8/29/17', '46,050'],
['8/30/17', '45,950'],
['8/31/17', '46,250'],
['9/1/17', '45,650'],
['9/4/17', '44,700'],
['9/5/17', '44,100'],
['9/6/17', '42,900'],
['9/7/17', '46,350'],
['9/8/17', '46,100'],
['9/11/17', '45,950'],
['9/12/17', '45,500'],
['9/13/17', '45,750'],
['9/14/17', '46,750'],
['9/15/17', '47,350'],
['9/18/17', '45,950'],
['9/19/17', '46,350'],
['9/20/17', '46,200'],
['9/21/17', '43,500'],
['9/22/17', '43,900'],
['9/25/17', '44,000'],
['9/26/17', '43,650'],
['9/27/17', '43,650'],
['9/28/17', '42,700'],
['9/29/17', '43,700'],
['10/10/17', '47,700'],
['10/11/17', '47,700'],
['10/12/17', '47,700'],
['10/13/17', '47,700'],
['10/16/17', '47,700'],
['10/17/17', '47,700'],
['10/18/17', '47,700'],
['10/19/17', '56,200'],
['10/20/17', '58,400'],
['10/23/17', '56,700'],
['10/24/17', '54,100'],
['10/25/17', '55,600'],
['10/26/17', '55,500'],
['10/27/17', '56,800'],
['10/30/17', '56,100'],
['10/31/17', '56,800'],
['11/1/17', '57,000'],
['11/2/17', '56,300'],
['11/3/17', '56,900'],
['11/6/17', '56,200'],
['11/7/17', '55,400'],
['11/8/17', '54,800'],
['11/9/17', '54,500'],
['11/10/17', '52,900'],
['11/13/17', '50,500'],
['11/14/17', '51,000'],
['11/15/17', '50,500'],
['11/16/17', '53,200'],
['11/17/17', '52,400'],
['11/20/17', '53,400'],
['11/21/17', '52,000'],
['11/22/17', '51,600'],
['11/23/17', '51,700'],
['11/24/17', '51,800'],
['11/27/17', '51,200'],
['11/28/17', '50,500'],
['11/29/17', '49,850'],
['11/30/17', '50,100'],
['12/1/17', '49,050'],
['12/4/17', '49,900'],
['12/5/17', '50,400'],
['12/6/17', '49,700'],
['12/7/17', '48,800'],
['12/8/17', '46,150'],
['12/11/17', '46,400'],
['12/12/17', '47,350'],
['12/13/17', '47,050'],
['12/14/17', '46,550'],
['12/15/17', '46,900'],
['12/18/17', '46,350'],
['12/19/17', '46,700'],
['12/20/17', '47,600'],
['12/21/17', '46,950'],
['12/22/17', '46,200'],
['12/26/17', '46,100'],
['12/27/17', '46,700'],
['12/28/17', '47,450'],
['1/2/18', '48,400'],
['1/3/18', '49,000'],
['1/4/18', '48,900'],
['1/5/18', '48,200'],
['1/8/18', '47,600'],
['1/9/18', '48,350'],
['1/10/18', '48,150'],
['1/11/18', '47,850'],
['1/12/18', '47,250'],
['1/15/18', '48,100'],
['1/16/18', '51,000'],
['1/17/18', '54,100'],
['1/18/18', '53,300'],
['1/19/18', '52,900'],
['1/22/18', '53,400'],
['1/23/18', '53,500'],
['1/24/18', '54,800'],
['1/25/18', '54,600'],
['1/26/18', '55,400'],
['1/29/18', '55,200'],
['1/30/18', '53,500'],
['1/31/18', '52,600'],
['2/1/18', '51,700'],
['2/2/18', '50,500'],
['2/5/18', '48,950'],
['2/6/18', '47,750'],
['2/7/18', '47,250'],
['2/8/18', '47,400'],
['2/9/18', '46,050'],
['2/12/18', '46,200'],
['2/13/18', '45,400'],
['2/14/18', '46,300']]

export {dummie}