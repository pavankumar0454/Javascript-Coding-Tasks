var addTwoNumbers = function(l1, l2) {
        var getModAndCarry = function (num) {
            var result = {
                m:num,
                carry:0
            };
            if(num < 10){
                return result;
            }
            result.m = num % 10;
            result.carry = (num - result.m) / 10;
            return result;
        }

        var l1Cur = l1,
                l2Cur = l2,
                result = [],
                ret = [],
                i = 0;

        while(true){
            
            result.push(l1Cur.val + l2Cur.val);

            if(l1Cur.next == null && l2Cur.next == null){
                break;
            }
            l1Cur = l1Cur.next || {val:0,next:null};
            l2Cur = l2Cur.next  || {val:0,next:null};
        }
        if(result.length == 1 && result[0] == 0){
            return new ListNode(0);
        }
        var pre = 0;
        var curNode = null;
        result.forEach(function (num,i) {
            var cur = getModAndCarry(num+pre);
            pre = cur.carry;
            ret.push(new ListNode(cur.m));
            if(i == result.length - 1){
                if(cur.carry != 0){
                    ret.push(new ListNode(cur.carry));
                }
            }
        })
        ret.forEach(function (node,i) {
            if(ret[i] && ret[i + 1]){
                ret[i]['next'] = ret[i + 1];
            }
        })
        return ret[0];
    };