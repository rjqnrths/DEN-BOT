import json
with open('dens.json', encoding='utf-8') as denpoke:
    data = json.load(denpoke)
    a=67
    swname=[]
    shname=[]
    ability=[]
    i = 0
    i1 = 0
    i2 = 0
    searchdata=data[a-1]
    sword = searchdata['소드']
    shield = searchdata['실드']
    shieldlength = len(shield)
    swordlength = len(sword)
    while swordlength > i:
        swordinfo = sword[i]
        swordname = swordinfo['이름']
        swordability = swordinfo['특성']
        if swordability == '드특':
            swname.append(swordname)
        i += 1
    while shieldlength > i1:
        shieldinfo = shield[i1]
        shieldname = shieldinfo['이름']
        shieldability = shieldinfo['특성']
        if shieldability == '드특':
            shname.append(shieldname)
        i1 += 1
    shnew = set(shname)
    shieldend = list(shnew)
    swnew = set(swname)
    swordend = list(swnew)
    swordlength1 = len(swordend)
    shieldlength1 = len(shieldend)
    print ("\n".join(swordend))

