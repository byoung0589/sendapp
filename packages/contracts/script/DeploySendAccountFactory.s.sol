// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {Helper} from "../src/Helper.sol";

import {DaimoVerifier, DaimoVerifierProxy} from "../src/DaimoVerifier.sol";
import "../src/DaimoAccountFactory.sol";

contract DeploySendAccountFactoryScript is Script, Helper {
    function setUp() public {
        this.labels();
    }

    function run() public {
        address verifier = vm.computeCreate2Address(0, hashInitCode(type(DaimoVerifier).creationCode));
        address owner = SEND_DEPLOYER; // FIXME: pick a multisig
        bytes memory args = abi.encode(verifier, abi.encodeWithSelector(DaimoVerifier.init.selector, owner));
        address verifierProxy = vm.computeCreate2Address(0, hashInitCode(type(DaimoVerifierProxy).creationCode, args));

        vm.startBroadcast();
        address factory =
            address(new DaimoAccountFactory{salt: 0}(IEntryPoint(AA_ENTRY_POINT_V0_7), DaimoVerifier(verifierProxy)));

        /* solhint-disable no-console */
        console2.log("DaimoVerifier address:", verifier);
        console2.log("DaimoVerifierProxy address:", verifierProxy);
        console2.log("DaimoAccountFactory address:", factory);
        vm.stopBroadcast();
    }
}
